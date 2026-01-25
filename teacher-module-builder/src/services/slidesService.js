/**
 * Google Slides API Service
 * Generates lesson slide decks from lesson content
 */

const SLIDES_API_BASE = 'https://slides.googleapis.com/v1/presentations';

/**
 * Creates a new Google Slides presentation for a lesson
 */
export async function createLessonSlides(accessToken, lesson, unit) {
  // Create the presentation
  const presentation = await createPresentation(accessToken, lesson.title || 'Untitled Lesson');
  const presentationId = presentation.presentationId;

  // Build all slide requests
  const requests = buildLessonSlideRequests(lesson, unit, presentation);

  // Execute batch update
  if (requests.length > 0) {
    await batchUpdate(accessToken, presentationId, requests);
  }

  return {
    presentationId,
    url: `https://docs.google.com/presentation/d/${presentationId}/edit`,
  };
}

/**
 * Creates a new empty presentation
 */
async function createPresentation(accessToken, title) {
  const response = await fetch(SLIDES_API_BASE, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to create presentation: ${error.error?.message || 'Unknown error'}`);
  }

  return response.json();
}

/**
 * Batch update a presentation
 */
async function batchUpdate(accessToken, presentationId, requests) {
  const response = await fetch(`${SLIDES_API_BASE}/${presentationId}:batchUpdate`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requests }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to update presentation: ${error.error?.message || 'Unknown error'}`);
  }

  return response.json();
}

/**
 * Builds all slide requests for a lesson
 */
function buildLessonSlideRequests(lesson, unit, presentation) {
  const requests = [];
  let slideIndex = 1; // Start after title slide

  // Get the title slide ID (first slide created by default)
  const titleSlideId = presentation.slides?.[0]?.objectId || 'title-slide';

  // Update title slide
  requests.push(...buildTitleSlideRequests(titleSlideId, lesson, unit));

  // Minds On slide
  if (lesson.mindsOn?.prompt) {
    const mindsOnSlideId = `minds-on-${Date.now()}`;
    requests.push(createSlideRequest(mindsOnSlideId, slideIndex++));
    requests.push(...buildMindsOnSlideRequests(mindsOnSlideId, lesson.mindsOn));
  }

  // Work Time slides (one per activity)
  const activities = lesson.activities || [];
  activities.forEach((activity, index) => {
    const activitySlideId = `activity-${index}-${Date.now()}`;
    requests.push(createSlideRequest(activitySlideId, slideIndex++));
    requests.push(...buildActivitySlideRequests(activitySlideId, activity, index + 1));
  });

  // Team Roles slide (if teams enabled)
  if (lesson.teamConfig?.mode === 'teams') {
    const teamSlideId = `team-roles-${Date.now()}`;
    requests.push(createSlideRequest(teamSlideId, slideIndex++));
    requests.push(...buildTeamRolesSlideRequests(teamSlideId));
  }

  // Share Out slide
  if (lesson.shareOut?.prompts) {
    const shareOutSlideId = `share-out-${Date.now()}`;
    requests.push(createSlideRequest(shareOutSlideId, slideIndex++));
    requests.push(...buildShareOutSlideRequests(shareOutSlideId, lesson.shareOut));
  }

  // Exit Ticket slide
  if (lesson.exitTicket?.prompt) {
    const exitSlideId = `exit-ticket-${Date.now()}`;
    requests.push(createSlideRequest(exitSlideId, slideIndex++));
    requests.push(...buildExitTicketSlideRequests(exitSlideId, lesson.exitTicket));
  }

  return requests;
}

/**
 * Create a new blank slide
 */
function createSlideRequest(slideId, index) {
  return {
    createSlide: {
      objectId: slideId,
      insertionIndex: index,
      slideLayoutReference: {
        predefinedLayout: 'BLANK',
      },
    },
  };
}

/**
 * Build title slide content
 */
function buildTitleSlideRequests(slideId, lesson, unit) {
  const requests = [];
  const titleBoxId = `${slideId}-title`;
  const subtitleBoxId = `${slideId}-subtitle`;
  const phaseBoxId = `${slideId}-phase`;

  // Title text box
  requests.push({
    createShape: {
      objectId: titleBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 600, unit: 'PT' }, height: { magnitude: 80, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 60, translateY: 150, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: titleBoxId,
      text: lesson.title || 'Untitled Lesson',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: titleBoxId,
      style: {
        fontSize: { magnitude: 44, unit: 'PT' },
        fontFamily: 'Google Sans',
        bold: true,
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,bold,foregroundColor',
    },
  });

  // Subtitle (unit name)
  if (unit?.title) {
    requests.push({
      createShape: {
        objectId: subtitleBoxId,
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 600, unit: 'PT' }, height: { magnitude: 40, unit: 'PT' } },
          transform: { scaleX: 1, scaleY: 1, translateX: 60, translateY: 230, unit: 'PT' },
        },
      },
    });

    requests.push({
      insertText: {
        objectId: subtitleBoxId,
        text: unit.title,
        insertionIndex: 0,
      },
    });

    requests.push({
      updateTextStyle: {
        objectId: subtitleBoxId,
        style: {
          fontSize: { magnitude: 24, unit: 'PT' },
          fontFamily: 'Google Sans',
          foregroundColor: { opaqueColor: { rgbColor: { red: 0.4, green: 0.4, blue: 0.4 } } },
        },
        fields: 'fontSize,fontFamily,foregroundColor',
      },
    });
  }

  // Phase badge
  const phaseLabels = {
    engage: '🧠 Engage',
    explore: '🔍 Explore',
    explain: '📖 Explain',
    elaborate: '🚀 Elaborate',
    evaluate: '📊 Evaluate',
  };

  if (lesson.phase && phaseLabels[lesson.phase]) {
    requests.push({
      createShape: {
        objectId: phaseBoxId,
        shapeType: 'ROUND_RECTANGLE',
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 120, unit: 'PT' }, height: { magnitude: 36, unit: 'PT' } },
          transform: { scaleX: 1, scaleY: 1, translateX: 60, translateY: 290, unit: 'PT' },
        },
      },
    });

    requests.push({
      insertText: {
        objectId: phaseBoxId,
        text: phaseLabels[lesson.phase],
        insertionIndex: 0,
      },
    });

    requests.push({
      updateShapeProperties: {
        objectId: phaseBoxId,
        shapeProperties: {
          shapeBackgroundFill: {
            solidFill: { color: { rgbColor: { red: 0.56, green: 0.44, blue: 0.89 } } },
          },
        },
        fields: 'shapeBackgroundFill',
      },
    });

    requests.push({
      updateTextStyle: {
        objectId: phaseBoxId,
        style: {
          fontSize: { magnitude: 14, unit: 'PT' },
          fontFamily: 'Google Sans',
          bold: true,
          foregroundColor: { opaqueColor: { rgbColor: { red: 1, green: 1, blue: 1 } } },
        },
        fields: 'fontSize,fontFamily,bold,foregroundColor',
      },
    });

    requests.push({
      updateParagraphStyle: {
        objectId: phaseBoxId,
        style: { alignment: 'CENTER' },
        fields: 'alignment',
      },
    });
  }

  return requests;
}

/**
 * Build Minds On slide
 */
function buildMindsOnSlideRequests(slideId, mindsOn) {
  const requests = [];
  const headerBoxId = `${slideId}-header`;
  const contentBoxId = `${slideId}-content`;

  // Header
  requests.push({
    createShape: {
      objectId: headerBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 60, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 30, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: headerBoxId,
      text: '🧠 Minds On',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: headerBoxId,
      style: {
        fontSize: { magnitude: 36, unit: 'PT' },
        fontFamily: 'Google Sans',
        bold: true,
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.93, green: 0.73, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,bold,foregroundColor',
    },
  });

  // Content
  requests.push({
    createShape: {
      objectId: contentBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 300, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 100, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: contentBoxId,
      text: mindsOn.prompt || '',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: contentBoxId,
      style: {
        fontSize: { magnitude: 24, unit: 'PT' },
        fontFamily: 'Google Sans',
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,foregroundColor',
    },
  });

  return requests;
}

/**
 * Build Activity slide
 */
function buildActivitySlideRequests(slideId, activity, activityNumber) {
  const requests = [];
  const headerBoxId = `${slideId}-header`;
  const titleBoxId = `${slideId}-title`;
  const contentBoxId = `${slideId}-content`;

  const activityIcons = {
    code_playground: '💻',
    challenge_lab: '🧩',
    quiz: '❓',
    worksheet: '📄',
    discussion_prompt: '💬',
    prediction_poll: '🎯',
    simulation: '🎮',
    manipulative: '🎴',
    group_project: '👥',
  };

  const icon = activityIcons[activity.type] || '📋';

  // Header
  requests.push({
    createShape: {
      objectId: headerBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 40, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 30, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: headerBoxId,
      text: `Activity ${activityNumber}`,
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: headerBoxId,
      style: {
        fontSize: { magnitude: 18, unit: 'PT' },
        fontFamily: 'Google Sans',
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.4, green: 0.4, blue: 0.4 } } },
      },
      fields: 'fontSize,fontFamily,foregroundColor',
    },
  });

  // Title
  requests.push({
    createShape: {
      objectId: titleBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 50, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 65, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: titleBoxId,
      text: `${icon} ${activity.title || activity.type?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: titleBoxId,
      style: {
        fontSize: { magnitude: 32, unit: 'PT' },
        fontFamily: 'Google Sans',
        bold: true,
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,bold,foregroundColor',
    },
  });

  // Content (instructions or prompt)
  const content = activity.content?.instructions || activity.content?.prompt || '';
  if (content) {
    requests.push({
      createShape: {
        objectId: contentBoxId,
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 280, unit: 'PT' } },
          transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 130, unit: 'PT' },
        },
      },
    });

    requests.push({
      insertText: {
        objectId: contentBoxId,
        text: content,
        insertionIndex: 0,
      },
    });

    requests.push({
      updateTextStyle: {
        objectId: contentBoxId,
        style: {
          fontSize: { magnitude: 20, unit: 'PT' },
          fontFamily: 'Google Sans',
          foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
        },
        fields: 'fontSize,fontFamily,foregroundColor',
      },
    });
  }

  return requests;
}

/**
 * Build Team Roles slide
 */
function buildTeamRolesSlideRequests(slideId) {
  const requests = [];
  const headerBoxId = `${slideId}-header`;
  const rolesBoxId = `${slideId}-roles`;

  // Header
  requests.push({
    createShape: {
      objectId: headerBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 60, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 30, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: headerBoxId,
      text: '👥 Team Roles',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: headerBoxId,
      style: {
        fontSize: { magnitude: 36, unit: 'PT' },
        fontFamily: 'Google Sans',
        bold: true,
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,bold,foregroundColor',
    },
  });

  // Roles content
  const rolesText = `🧩 Explainer
Guide your team through the coding logic. Make sure everyone understands before moving on.

🧭 Leader
Keep your team organized and on-task. Manage time and delegate when needed.

❓ Questioner
Ask clarifying questions. Research when stuck. Challenge assumptions constructively.`;

  requests.push({
    createShape: {
      objectId: rolesBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 300, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 100, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: rolesBoxId,
      text: rolesText,
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: rolesBoxId,
      style: {
        fontSize: { magnitude: 18, unit: 'PT' },
        fontFamily: 'Google Sans',
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,foregroundColor',
    },
  });

  return requests;
}

/**
 * Build Share Out slide
 */
function buildShareOutSlideRequests(slideId, shareOut) {
  const requests = [];
  const headerBoxId = `${slideId}-header`;
  const contentBoxId = `${slideId}-content`;

  // Header
  requests.push({
    createShape: {
      objectId: headerBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 60, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 30, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: headerBoxId,
      text: '🎤 Share Out',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: headerBoxId,
      style: {
        fontSize: { magnitude: 36, unit: 'PT' },
        fontFamily: 'Google Sans',
        bold: true,
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.56, green: 0.44, blue: 0.89 } } },
      },
      fields: 'fontSize,fontFamily,bold,foregroundColor',
    },
  });

  // Content
  requests.push({
    createShape: {
      objectId: contentBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 300, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 100, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: contentBoxId,
      text: shareOut.prompts || '',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: contentBoxId,
      style: {
        fontSize: { magnitude: 24, unit: 'PT' },
        fontFamily: 'Google Sans',
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,foregroundColor',
    },
  });

  return requests;
}

/**
 * Build Exit Ticket slide
 */
function buildExitTicketSlideRequests(slideId, exitTicket) {
  const requests = [];
  const headerBoxId = `${slideId}-header`;
  const contentBoxId = `${slideId}-content`;

  // Header
  requests.push({
    createShape: {
      objectId: headerBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 60, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 30, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: headerBoxId,
      text: '✅ Exit Ticket',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: headerBoxId,
      style: {
        fontSize: { magnitude: 36, unit: 'PT' },
        fontFamily: 'Google Sans',
        bold: true,
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.7, blue: 0.4 } } },
      },
      fields: 'fontSize,fontFamily,bold,foregroundColor',
    },
  });

  // Content
  requests.push({
    createShape: {
      objectId: contentBoxId,
      shapeType: 'TEXT_BOX',
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 650, unit: 'PT' }, height: { magnitude: 300, unit: 'PT' } },
        transform: { scaleX: 1, scaleY: 1, translateX: 35, translateY: 100, unit: 'PT' },
      },
    },
  });

  requests.push({
    insertText: {
      objectId: contentBoxId,
      text: exitTicket.prompt || '',
      insertionIndex: 0,
    },
  });

  requests.push({
    updateTextStyle: {
      objectId: contentBoxId,
      style: {
        fontSize: { magnitude: 24, unit: 'PT' },
        fontFamily: 'Google Sans',
        foregroundColor: { opaqueColor: { rgbColor: { red: 0.2, green: 0.2, blue: 0.2 } } },
      },
      fields: 'fontSize,fontFamily,foregroundColor',
    },
  });

  return requests;
}

export default {
  createLessonSlides,
};

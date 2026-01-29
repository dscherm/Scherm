import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Cloud, CloudOff, LogIn, LogOut, RefreshCw, Download, Upload,
  Check, AlertCircle, User, Trash2, HardDrive
} from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import {
  isConfigured,
  signInWithGoogle,
  logOut,
  onAuthChange,
  syncAllToCloud,
  getAllFromCloud
} from '../services/firebase';

const Settings = () => {
  const navigate = useNavigate();
  const stories = useStoryStore(state => state.stories);
  const voiceSessions = useStoryStore(state => state.voiceSessions);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState(null);
  const [lastSync, setLastSync] = useState(localStorage.getItem('lastSyncTime'));

  useEffect(() => {
    if (isConfigured) {
      const unsubscribe = onAuthChange((user) => {
        setUser(user);
      });
      return () => unsubscribe();
    }
  }, []);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      showMessage('Signed in successfully!');
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await logOut();
      showMessage('Signed out');
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setLoading(false);
  };

  const handleSyncToCloud = async () => {
    if (!user) return;
    setSyncing(true);
    try {
      await syncAllToCloud(user.uid, stories, voiceSessions);
      const now = new Date().toISOString();
      localStorage.setItem('lastSyncTime', now);
      setLastSync(now);
      showMessage(`Synced ${stories.length} stories and ${voiceSessions.length} sessions`);
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setSyncing(false);
  };

  const handleDownloadFromCloud = async () => {
    if (!user) return;
    setSyncing(true);
    try {
      const data = await getAllFromCloud(user.uid);
      // Merge cloud data with local - this is a simple implementation
      // A more sophisticated approach would handle conflicts
      const { mergeCloudData } = useStoryStore.getState();
      if (mergeCloudData) {
        mergeCloudData(data.stories, data.voiceSessions);
      }
      showMessage(`Downloaded ${data.stories.length} stories and ${data.voiceSessions.length} sessions`);
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setSyncing(false);
  };

  const handleClearLocalData = () => {
    if (confirm('This will delete all local stories and voice sessions. Are you sure?')) {
      localStorage.removeItem('story-brainstormer-storage');
      window.location.reload();
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  const localStorageSize = () => {
    const data = localStorage.getItem('story-brainstormer-storage');
    if (!data) return '0 KB';
    const bytes = new Blob([data]).size;
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="p-4 animate-fade-in pb-24">
      <h2 className="text-xl font-bold mb-6">Settings</h2>

      {/* Message Toast */}
      {message && (
        <div className={`fixed top-4 left-4 right-4 p-4 rounded-xl z-50 flex items-center gap-2 animate-fade-in ${
          message.type === 'error' ? 'bg-red-600' : 'bg-green-600'
        }`}>
          {message.type === 'error' ? (
            <AlertCircle className="w-5 h-5" />
          ) : (
            <Check className="w-5 h-5" />
          )}
          {message.text}
        </div>
      )}

      {/* Cloud Sync Section */}
      <div className="card mb-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Cloud className="w-5 h-5 text-primary-400" />
          Cloud Sync
        </h3>

        {!isConfigured ? (
          <div className="bg-slate-700/50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <CloudOff className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-300 mb-2">
                  Cloud sync is not configured. To enable it, create a Firebase project and add your config to <code className="bg-slate-800 px-1 rounded">.env</code>:
                </p>
                <pre className="text-xs text-slate-400 bg-slate-800 p-2 rounded overflow-x-auto">
{`VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123`}</pre>
              </div>
            </div>
          </div>
        ) : user ? (
          <div className="space-y-4">
            {/* User Info */}
            <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
              ) : (
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
              )}
              <div className="flex-1">
                <p className="font-medium">{user.displayName || 'User'}</p>
                <p className="text-sm text-slate-400">{user.email}</p>
              </div>
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="btn-secondary py-2 px-3 text-sm"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

            {/* Sync Status */}
            <div className="text-sm text-slate-400">
              Last synced: {formatDate(lastSync)}
            </div>

            {/* Sync Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleSyncToCloud}
                disabled={syncing}
                className="flex-1 btn-primary py-3 flex items-center justify-center gap-2"
              >
                {syncing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                Upload to Cloud
              </button>
              <button
                onClick={handleDownloadFromCloud}
                disabled={syncing}
                className="flex-1 btn-secondary py-3 flex items-center justify-center gap-2"
              >
                {syncing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                Download
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}
            Sign in with Google
          </button>
        )}
      </div>

      {/* Local Storage Section */}
      <div className="card mb-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-green-400" />
          Local Storage
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Stories</span>
            <span>{stories.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Voice Sessions</span>
            <span>{voiceSessions.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Storage Used</span>
            <span>{localStorageSize()}</span>
          </div>
        </div>

        <button
          onClick={handleClearLocalData}
          className="w-full mt-4 btn-secondary py-2 text-red-400 hover:bg-red-900/30 flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear All Local Data
        </button>
      </div>

      {/* About Section */}
      <div className="card">
        <h3 className="font-semibold mb-3">About</h3>
        <p className="text-sm text-slate-400">
          Story Brainstormer v1.0
        </p>
        <p className="text-sm text-slate-500 mt-2">
          A mobile-first app for brainstorming and planning stories with voice support.
        </p>
      </div>
    </div>
  );
};

export default Settings;

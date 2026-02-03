import { useState } from 'react';
import {
  Cloud, CloudOff, LogIn, LogOut, RefreshCw,
  Check, AlertCircle, User, Trash2, HardDrive, Zap
} from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import useAuth from '../hooks/useAuth';
import SyncStatus from './SyncStatus';

const Settings = () => {
  const stories = useStoryStore(state => state.stories);
  const voiceSessions = useStoryStore(state => state.voiceSessions);
  const { syncStatus, lastSyncedAt, initCloudSync } = useStoryStore();

  const { user, loading: authLoading, signIn, signOut, isConfigured } = useAuth();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn();
      showMessage('Signed in! Your stories will now sync automatically.');
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      showMessage('Signed out. Stories saved locally only.');
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setLoading(false);
  };

  const handleForceSync = async () => {
    setLoading(true);
    try {
      await initCloudSync();
      showMessage('Sync completed!');
    } catch (error) {
      showMessage(error.message, 'error');
    }
    setLoading(false);
  };

  const handleClearLocalData = () => {
    if (confirm('This will delete all local stories and voice sessions. Cloud data will remain. Are you sure?')) {
      localStorage.removeItem('story-brainstormer-storage');
      localStorage.removeItem('story-brainstormer-auth');
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
          {user && (
            <span className="ml-auto">
              <SyncStatus compact />
            </span>
          )}
        </h3>

        {!isConfigured ? (
          <div className="bg-slate-700/50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <CloudOff className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-300 mb-2">
                  Cloud sync is not configured. To enable it, add Firebase config to <code className="bg-slate-800 px-1 rounded">.env</code>
                </p>
              </div>
            </div>
          </div>
        ) : user ? (
          <div className="space-y-4">
            {/* Auto-sync indicator */}
            <div className="flex items-center gap-2 p-3 bg-green-900/30 rounded-xl text-green-400">
              <Zap className="w-5 h-5" />
              <div>
                <p className="font-medium">Auto-sync enabled</p>
                <p className="text-sm text-green-400/70">Changes sync automatically to the cloud</p>
              </div>
            </div>

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
                disabled={loading || authLoading}
                className="btn-secondary py-2 px-3 text-sm"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

            {/* Sync Status */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">
                Last synced: {formatDate(lastSyncedAt)}
              </span>
              <SyncStatus />
            </div>

            {/* Manual Sync Button */}
            <button
              onClick={handleForceSync}
              disabled={loading || syncStatus === 'syncing'}
              className="w-full btn-secondary py-3 flex items-center justify-center gap-2"
            >
              {syncStatus === 'syncing' ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              Force Sync Now
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-700/50 rounded-xl p-4">
              <p className="text-sm text-slate-300 mb-3">
                Sign in to enable automatic cloud sync. Your stories will be saved to the cloud and accessible from any device.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Auto-save to cloud on every change
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Real-time sync across devices
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Never lose your work
                </li>
              </ul>
            </div>
            <button
              onClick={handleSignIn}
              disabled={loading || authLoading}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2"
            >
              {(loading || authLoading) ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              Sign in with Google
            </button>
          </div>
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

        <p className="text-xs text-slate-500 mt-3">
          {user ?
            'Local storage acts as a cache. Your data is backed up to the cloud.' :
            'All data is stored locally in your browser. Sign in to back up to the cloud.'
          }
        </p>

        <button
          onClick={handleClearLocalData}
          className="w-full mt-4 btn-secondary py-2 text-red-400 hover:bg-red-900/30 flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear Local Cache
        </button>
      </div>

      {/* About Section */}
      <div className="card">
        <h3 className="font-semibold mb-3">About</h3>
        <p className="text-sm text-slate-400">
          Story Brainstormer v2.0
        </p>
        <p className="text-sm text-slate-500 mt-2">
          A mobile-first app for brainstorming and planning stories with voice support and automatic cloud sync.
        </p>
      </div>
    </div>
  );
};

export default Settings;

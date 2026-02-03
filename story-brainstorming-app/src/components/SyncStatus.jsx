import { Cloud, CloudOff, RefreshCw, AlertCircle, Check } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import useAuth from '../hooks/useAuth';

export default function SyncStatus({ compact = false }) {
  const { syncStatus, lastSyncedAt } = useStoryStore();
  const { user, isConfigured } = useAuth();

  if (!isConfigured) {
    return null;
  }

  if (!user) {
    if (compact) {
      return (
        <div className="flex items-center gap-1 text-gray-500">
          <CloudOff className="w-4 h-4" />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <CloudOff className="w-4 h-4" />
        <span>Not signed in</span>
      </div>
    );
  }

  const getStatusDisplay = () => {
    switch (syncStatus) {
      case 'syncing':
        return {
          icon: <RefreshCw className="w-4 h-4 animate-spin" />,
          text: 'Syncing...',
          color: 'text-blue-400'
        };
      case 'synced':
        return {
          icon: <Check className="w-4 h-4" />,
          text: 'Synced',
          color: 'text-green-400'
        };
      case 'error':
        return {
          icon: <AlertCircle className="w-4 h-4" />,
          text: 'Sync error',
          color: 'text-red-400'
        };
      default:
        return {
          icon: <Cloud className="w-4 h-4" />,
          text: 'Ready',
          color: 'text-gray-400'
        };
    }
  };

  const status = getStatusDisplay();

  if (compact) {
    return (
      <div className={`flex items-center gap-1 ${status.color}`} title={status.text}>
        {status.icon}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${status.color} text-sm`}>
      {status.icon}
      <span>{status.text}</span>
      {lastSyncedAt && syncStatus === 'synced' && (
        <span className="text-gray-500 text-xs">
          {new Date(lastSyncedAt).toLocaleTimeString()}
        </span>
      )}
    </div>
  );
}

# credentials_manager.py - Secure API key storage using Windows Credential Manager

import keyring
from typing import Optional

# Service names for credential storage
HUGGINGFACE_SERVICE = "comfyui-prompter-huggingface"
CIVITAI_SERVICE = "comfyui-prompter-civitai"
ELEVENLABS_SERVICE = "comfyui-prompter-elevenlabs"

# Username is constant, we're just storing the token
CREDENTIAL_USERNAME = "api_token"


class CredentialsManager:
    """Securely store and retrieve API credentials using Windows Credential Manager"""

    @staticmethod
    def get_credential(service: str) -> Optional[str]:
        """
        Retrieve a credential from secure storage.

        Args:
            service: One of 'huggingface', 'civitai', 'elevenlabs'

        Returns:
            The stored token/API key, or None if not found
        """
        service_name = CredentialsManager._get_service_name(service)
        try:
            return keyring.get_password(service_name, CREDENTIAL_USERNAME)
        except Exception as e:
            print(f"Error retrieving credential for {service}: {e}")
            return None

    @staticmethod
    def set_credential(service: str, token: str) -> bool:
        """
        Store a credential securely.

        Args:
            service: One of 'huggingface', 'civitai', 'elevenlabs'
            token: The API token/key to store

        Returns:
            True if successful, False otherwise
        """
        service_name = CredentialsManager._get_service_name(service)
        try:
            keyring.set_password(service_name, CREDENTIAL_USERNAME, token)
            return True
        except Exception as e:
            print(f"Error storing credential for {service}: {e}")
            return False

    @staticmethod
    def delete_credential(service: str) -> bool:
        """
        Delete a stored credential.

        Args:
            service: One of 'huggingface', 'civitai', 'elevenlabs'

        Returns:
            True if successful, False otherwise
        """
        service_name = CredentialsManager._get_service_name(service)
        try:
            keyring.delete_password(service_name, CREDENTIAL_USERNAME)
            return True
        except keyring.errors.PasswordDeleteError:
            # Credential doesn't exist, that's fine
            return True
        except Exception as e:
            print(f"Error deleting credential for {service}: {e}")
            return False

    @staticmethod
    def has_credential(service: str) -> bool:
        """Check if a credential exists for the given service."""
        return CredentialsManager.get_credential(service) is not None

    @staticmethod
    def _get_service_name(service: str) -> str:
        """Map service shortname to full service name."""
        service_map = {
            'huggingface': HUGGINGFACE_SERVICE,
            'hf': HUGGINGFACE_SERVICE,
            'civitai': CIVITAI_SERVICE,
            'elevenlabs': ELEVENLABS_SERVICE,
            'el': ELEVENLABS_SERVICE,
        }
        return service_map.get(service.lower(), service)

    @staticmethod
    def get_all_credentials_status() -> dict:
        """Get status of all credentials (whether they exist, not their values)."""
        return {
            'huggingface': CredentialsManager.has_credential('huggingface'),
            'civitai': CredentialsManager.has_credential('civitai'),
            'elevenlabs': CredentialsManager.has_credential('elevenlabs'),
        }


# Convenience functions
def get_huggingface_token() -> Optional[str]:
    """Get HuggingFace API token."""
    return CredentialsManager.get_credential('huggingface')


def get_civitai_api_key() -> Optional[str]:
    """Get CivitAI API key."""
    return CredentialsManager.get_credential('civitai')


def get_elevenlabs_api_key() -> Optional[str]:
    """Get ElevenLabs API key."""
    return CredentialsManager.get_credential('elevenlabs')

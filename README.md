# Sync environment variables with azure (sea)
Syncs your local (and probably unversioned) .env variables straight to your live Web App in Azure.

## Installation instructions
- Install globally using: `npm install -g sync-env-azure`
- Synchronize your Azure account using `sea login`
- Go to the root of a project you wish to sync which contains the local .env variables
- Run `sea config` to set up the connection with your live Web App
- Run `sea sync` to sync the environment variables straight to your configured Azure Web App

## Why?
Because manually configuring/syncing/updating your live ENV variables with Azure Web Apps is a pain..

## Other features
- `sea pull` - pulls down your live ENV variables into your local/dev web app

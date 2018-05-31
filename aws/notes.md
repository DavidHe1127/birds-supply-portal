* Admin respond to regular user auth challenge
Users will be on `FORCE_CHANGE_PASSWORD` when being created from `Cognito` in AWS management console.
Run cli below to help them reset the new password.

```bash
aws cognito-idp admin-initiate-auth --user-pool-id <USER_POOL_ID> --client-id <APP_CLIENT_ID> --auth-flow ADMIN_NO_SRP_AUTH --auth-parameters USERNAME=<USERNAME>,PASSWORD=<USER TEMP PASSWORD>

aws cognito-idp admin-respond-to-auth-challenge --user-pool-id <USER_POOL_ID> --client-id <APP_CLIENT_ID> --challenge-name NEW_PASSWORD_REQUIRED --challenge-responses NEW_PASSWORD=<USER TEMP PASSWORD>,USERNAME=<USERNAME> --session <SESSION_KEY_CREATED_FROM_LAST_STEP>
```


# Admin Portal Setup Guide

This guide will help you set up the admin user for accessing the admin dashboard.

## Admin Credentials

- **Email**: `ngugi@promptbi.ai`
- **Password**: `prompt2025Nairobi`

## Setup Instructions

### Method 1: Using Supabase Dashboard (Recommended)

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Authentication** → **Users** (in the left sidebar)
4. Click the **"Add User"** button (top right)
5. Fill in the form:
   - **Email**: `ngugi@promptbi.ai`
   - **Password**: `prompt2025Nairobi`
   - **Confirm Password**: `prompt2025Nairobi`
   - **Auto Confirm User**: ✅ Check this box (important!)
6. Click **"Create User"**

### Method 2: Disable Email Confirmation (If Auto Confirm doesn't work)

If you see an error about email confirmation:

1. Go to **Authentication** → **Settings** (Email Auth section)
2. Find **"Enable email confirmations"**
3. Toggle it **OFF**
4. Try creating the user again using Method 1

### Method 3: Using the Setup Script

Run the included setup script:

```bash
npx tsx scripts/setup-admin.ts
```

Note: This requires your `.env` file to be properly configured with Supabase credentials.

## Accessing the Admin Dashboard

Once the user is created:

1. Navigate to `/admin/login` or click the "Admin" link in the footer
2. Enter the credentials:
   - Email: `ngugi@promptbi.ai`
   - Password: `prompt2025Nairobi`
3. Click "Sign In"

You will be redirected to the admin dashboard where you can:
- View all leads with marketing attribution
- Track beta tester applications
- Monitor masterclass registrations
- Export data to CSV
- Analyze conversion funnels and traffic sources

## Troubleshooting

### "Invalid credentials" error
- Make sure you created the user with **Auto Confirm User** enabled
- Check that email confirmations are disabled in Auth settings
- Verify the email and password are exactly as specified

### "User already exists" error
- The user has already been created
- Try logging in with the credentials

### Can't access /admin route
- Make sure you're logged in at `/admin/login` first
- The admin dashboard is protected and requires authentication

## Security Note

This admin account has full access to all analytics and user data. Keep the credentials secure and change the password after first login if needed.

To change the password:
1. Log into the admin dashboard
2. Go to Supabase Dashboard → Authentication → Users
3. Find the user and click "Reset Password"

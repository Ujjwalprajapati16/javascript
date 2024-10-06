# User Controller Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Helper Functions](#helper-functions)
3. [User Registration](#user-registration)
4. [User Login](#user-login)
5. [User Logout](#user-logout)
6. [Refresh Access Token](#refresh-access-token)
7. [Change Current Password](#change-current-password)
8. [Get Current User](#get-current-user)
9. [Update Account Details](#update-account-details)
10. [Update User Avatar](#update-user-avatar)
11. [Update User Cover Image](#update-user-cover-image)
12. [Get User Channel Profile](#get-user-channel-profile)
13. [Get Watched History](#get-watched-history)

## Introduction

This document provides a detailed explanation of each function in the user controller (`user.controller.js`) of the backend API. The controller handles user-related operations such as registration, authentication, profile management, and more.

## Helper Functions

### `generateAccessAndRefreshTokens(userId)`

This helper function generates new access and refresh tokens for a user.

**Parameters:**
- `userId`: The MongoDB ObjectId of the user

**Returns:**
- An object containing `accessToken` and `refreshToken`

**Process:**
1. Finds the user by ID
2. Generates access and refresh tokens using user methods
3. Saves the refresh token to the user document
4. Returns both tokens

**Error Handling:**
- Throws a 500 ApiError if token generation fails

## User Registration

### `registerUser(req, res)`

Handles the registration of a new user.

**Request Body:**
- `fullName`: User's full name
- `email`: User's email address
- `username`: Chosen username
- `password`: User's password

**Files:**
- `avatar`: User's profile picture (required)
- `coverImage`: User's cover image (optional)

**Process:**
1. Validates input fields
2. Checks for existing users with the same username or email
3. Uploads avatar and cover image to Cloudinary
4. Creates a new user in the database
5. Returns the created user object (excluding password and refresh token)

**Error Handling:**
- 400 ApiError for missing required fields
- 409 ApiError if user already exists
- 400 ApiError if avatar upload fails

## User Login

### `loginUser(req, res)`

Authenticates a user and provides access and refresh tokens.

**Request Body:**
- `email` or `username`: User's email or username
- `password`: User's password

**Process:**
1. Validates input (email/username and password)
2. Finds the user in the database
3. Verifies the password
4. Generates access and refresh tokens
5. Sends tokens as HTTP-only cookies and in the response body

**Error Handling:**
- 400 ApiError if email/username is missing
- 401 ApiError for invalid user or password

## User Logout

### `logOutUser(req, res)`

Logs out a user by clearing their refresh token and cookies.

**Process:**
1. Updates the user document to unset the refresh token
2. Clears the access and refresh token cookies

**Note:** Requires authentication middleware to set `req.user`

## Refresh Access Token

### `refereshAccessToken(req, res)`

Refreshes the user's access token using their refresh token.

**Request:**
- Refresh token in cookies or request body

**Process:**
1. Verifies the incoming refresh token
2. Finds the user associated with the token
3. Generates new access and refresh tokens
4. Updates cookies and sends the new tokens in the response

**Error Handling:**
- 401 ApiError for missing, invalid, or expired refresh token

## Change Current Password

### `changeCurrentPassword(req, res)`

Allows a user to change their password.

**Request Body:**
- `currentPassword`: User's current password
- `newPassword`: User's new password

**Process:**
1. Verifies the current password
2. Updates the user's password in the database

**Error Handling:**
- 401 ApiError if the current password is invalid

**Note:** Requires authentication middleware

## Get Current User

### `getCurrentUser(req, res)`

Retrieves the current user's details.

**Process:**
1. Finds the user by ID (set by authentication middleware)
2. Returns the user object (excluding password)

**Note:** Requires authentication middleware

## Update Account Details

### `updateAccountDetails(req, res)`

Updates a user's full name and email address.

**Request Body:**
- `fullName`: New full name (optional)
- `email`: New email address (optional)

**Process:**
1. Updates the user document with the new details
2. Returns the updated user object

**Error Handling:**
- 400 ApiError if both fullName and email are missing

**Note:** Requires authentication middleware

## Update User Avatar

### `updateUserAvatar(req, res)`

Updates a user's avatar image.

**Request File:**
- `avatar`: New avatar image

**Process:**
1. Uploads the new avatar to Cloudinary
2. Updates the user document with the new avatar URL
3. Returns the updated user object

**Error Handling:**
- 400 ApiError if avatar file is missing or upload fails

**Note:** Requires authentication middleware

## Update User Cover Image

### `updateUserCoverImage(req, res)`

Updates a user's cover image.

**Request File:**
- `coverImage`: New cover image

**Process:**
1. Uploads the new cover image to Cloudinary
2. Updates the user document with the new cover image URL
3. Returns the updated user object

**Error Handling:**
- 400 ApiError if cover image file is missing or upload fails

**Note:** Requires authentication middleware

## Get User Channel Profile

### `getUserChannelProfile(req, res)`

Retrieves a user's channel profile, including subscriber count and subscription status.

**Request Parameters:**
- `username`: The username of the channel to retrieve

**Process:**
1. Uses MongoDB aggregation to fetch user details, subscriber count, and subscription status
2. Returns the channel profile information

**Error Handling:**
- 400 ApiError if username is missing
- 404 ApiError if the channel does not exist

## Get Watched History

### `getWatchedHistory(req, res)`

Retrieves the watch history of the current user.

**Process:**
1. Uses MongoDB aggregation to fetch the user's watched videos, including video details and owner information
2. Returns the list of watched videos

**Note:** Requires authentication middleware

---

This documentation provides a detailed overview of each function in the user controller. Each function is explained with its purpose, input parameters, process flow, and error handling. Remember to keep this documentation updated as you make changes to the controller functions.

[Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)
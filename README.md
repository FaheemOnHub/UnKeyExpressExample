# UnkeyExpressExample

This simple application demonstrates how to implement Rate limiting for Express.js routes.

# Setup unkey
1. Go to unkey_ratelimits
2. create a new namespace, remember you have to use this namespace in the code , for this particular template keep namespace as "email.inbound"
3. Go to settings/root-keys and create a root key with Ratelimit permissions
4. Add it in the .env file UNKEY_ROOT_KEY

# Prerequisites
  Node
  An unkey account and a root-key

# Quickstart

1. Clone this repository:
   ```bash
   git clone https://github.com/FaheemOnHub/UnkeyExpressExample.git
   ```
2. Set up your environment variables: Create a .env file in the project root and add the following variables. Get the Unkey rootkey from settings , then Root Keys
   ```bash
   UNKEY_ROOT_KEY=your_unkey_root_key
   ```
3. Install the required dependencies
   ```bash
   npm install
   ```
4. Start the project:
   ```bash
   node index.js or nodemon index.js
   ```


# Usage
Can be tested using Postman ,Visit route using POST http://localhost:3000/api/hello ,Provide body:
```bash
UserID:"any_number"
```

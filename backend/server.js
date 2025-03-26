// Add this near your other startup code
const checkEnvVariables = () => {
  const requiredVars = ['IK_URL_ENDPOINT', 'IK_PUBLIC_KEY', 'IK_PRIVATE_KEY'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    process.exit(1);
  }
  
  console.log('✅ All required environment variables are present');
};

checkEnvVariables(); 
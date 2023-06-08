const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.header('x-api-key');
  
    // Check if the API key is provided
    if (!apiKey) {
      return res.status(401).json({ error: 'API key is missing.' });
    }
  
    // Check if the API key is valid
    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ error: 'Invalid API key.' });
    }
  
    // API key is valid, proceed to the next middleware or route handler
    next();
  };


  module.exports = apiKeyMiddleware;
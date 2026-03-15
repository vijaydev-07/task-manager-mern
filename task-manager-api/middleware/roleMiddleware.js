const roleMiddleware = (role) => {

  return (req, res, next) => {
    // Check if user has the right permission
    if (req.user.role !== role) {
      return res.status(403).json({
        message: "Access denied. Admin only."
      });
    }
    next();
  };

};

module.exports = roleMiddleware;



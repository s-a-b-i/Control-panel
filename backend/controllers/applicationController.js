import Application from "../models/ApplicationSchema.js";

export const getApplications = async (req, res) => {
  try {
    const { page = 1, limit = 10, deviceNo, appName, packageName, tagNotes } = req.query;
    const query = {};

    if (deviceNo) query.deviceNo = { $regex: deviceNo, $options: 'i' };
    if (appName) query.appName = { $regex: appName, $options: 'i' };
    if (packageName) query.packageName = { $regex: packageName, $options: 'i' };
    if (tagNotes) query.tagNotes = { $regex: tagNotes, $options: 'i' };

    const applications = await Application.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Application.countDocuments(query);

    res.json({
      applications,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createApplication = async (req, res) => {
  const application = new Application(req.body);

  try {
    const newApplication = await application.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
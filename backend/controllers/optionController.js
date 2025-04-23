const Option = require("../models/optionModel");

// @desc    Get options by category
// @route   GET /api/options/category/:category
// @access  Public
const getOptionsByCategory = async (req, res) => {
  try {
    const options = await Option.find({ category: req.params.category });
    res.json(options);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get all options
// @route   GET /api/options
// @access  Public
const getAllOptions = async (req, res) => {
  try {
    const options = await Option.find({});

    // Group by category
    const groupedOptions = options.reduce((acc, option) => {
      if (!acc[option.category]) {
        acc[option.category] = [];
      }
      acc[option.category].push(option);
      return acc;
    }, {});

    res.json(groupedOptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create new option (admin only)
// @route   POST /api/options
// @access  Private/Admin
const createOption = async (req, res) => {
  try {
    const newOption = new Option(req.body);
    const option = await newOption.save();
    res.status(201).json(option);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Update option (admin only)
// @route   PUT /api/options/:id
// @access  Private/Admin
const updateOption = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);

    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }

    const updatedOption = await Option.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedOption);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Delete option (admin only)
// @route   DELETE /api/options/:id
// @access  Private/Admin
const deleteOption = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);

    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }

    await option.remove();

    res.json({ message: "Option removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Add this function if you don't already have it
const createBatchOptions = async (req, res) => {
  try {
    const { options } = req.body;

    if (!options || !Array.isArray(options) || options.length === 0) {
      return res
        .status(400)
        .json({ message: "Valid options array is required" });
    }

    // Create all options
    const createdOptions = await Option.insertMany(options);

    res.status(201).json(createdOptions);
  } catch (error) {
    console.error("Error creating options:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  getOptionsByCategory,
  getAllOptions,
  createOption,
  updateOption,
  deleteOption,
  createBatchOptions,
};

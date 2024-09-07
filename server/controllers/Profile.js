const Profile = require("../models/Profile");
const User = require("../models/User");
const Course = require("../models/Course");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();
// Method for updating a profile
exports.updateProfile = async (req, res) => {
	try {
		const { dateOfBirth = "", about = "", contactNumber="",firstName,lastName,gender="" } = req.body;
		const id = req.user.id;

		//validation
		if(!contactNumber || !gender || !id) {
			return res.status(400).json({
				success:false,
				message:'All fields are required',
			});
		}

		// Find the profile by id
		const userDetails = await User.findById(id);
		const profileDetails = await Profile.findById(userDetails.additionalDetails);

		// Update the profile fields
		userDetails.firstName = firstName || userDetails.firstName;
		userDetails.lastName = lastName || userDetails.lastName;
		profileDetails.dateOfBirth = dateOfBirth || profileDetails.dateOfBirth;
		profileDetails.about = about || profileDetails.about;
		profileDetails.gender=gender || profileDetails.gender;
		profileDetails.contactNumber = contactNumber || profileDetails.contactNumber;

		// Save the updated profile
		await profileDetails.save();
		await userDetails.save();

		return res.json({
			success: true,
			message: "Profile updated successfully",
			profileDetails,
			userDetails
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

exports.deleteAccount = async (req, res) => {
	try {
		// TODO: Find More on Job Schedule
		// const job = schedule.scheduleJob("10 * * * * *", function () {
		// 	console.log("The answer to life, the universe, and everything!");
		// });
		// console.log(job);
		const id = req.user.id;
		const userDetails  = await User.findById({ _id: id });
		if (!userDetails) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
		// Delete Assosiated Profile with the User
		await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
		// TODO: Unenroll User From All the Enrolled Courses
		// Now Delete User
		await User.findByIdAndDelete({ _id: id });
		res.status(200).json({
			success: true,
			message: "User deleted successfully",
		});
	} catch (error) {
		console.log(error);
		res
		.status(500)
		.json({ success: false, message: "User Cannot be deleted",error:error.message });
	}
};

exports.getAllUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id)
			.populate("additionalDetails")
			.exec();
		console.log(userDetails);
		return res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.getEnrolledCourses=async (req,res) => {
	try {
        const id = req.user.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const enrolledCourses = await User.findById(id).populate({
			path : "courses",
				populate : {
					path: "courseContent",
			}
		}
		).populate("courseProgress").exec();
        // console.log(enrolledCourses);
        res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: enrolledCourses,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

//updateDisplayPicture
exports.updateDisplayPicture = async (req, res) => {
	try {

	const displayPicture = req.files.displayPicture;
	const id = req.user.id;
	const user = await User.findById(id);
	console.log(user);
	if (!user) {
		return res.status(404).json({
            success: false,
            message: "User not found",
        });
	}
	
	if (!displayPicture) {
		console.log("inside-> image not present");
		console.log(displayPicture);
		return res.status(404).json({
            success: false,
            message: "Image not found",
        });
    }
	const image = await uploadImageToCloudinary(
		displayPicture,
		process.env.FOLDER_NAME
	);
	console.log(image);

	const updatedImage = await User.findByIdAndUpdate({_id:id},{image:image.secure_url},{ new: true });

    res.status(200).json({
        success: true,
        message: "Image updated successfully",
        data: updatedImage,
    });
		
	} catch (error) {
		return res.status(500).json({
            success: false,
			message:"issue with updating the profile picture",
            errot: error.message,
        });
		
	}



}

//instructor dashboard
exports.instructorDashboard = async (req, res) => {
	try {
		const id = req.user.id;
		const courseData = await Course.find({instructor:id});
		const courseDetails = courseData.map((course) => {
			totalStudents = course?.studentsEnrolled?.length;
			totalRevenue = course?.price * totalStudents;
			const courseStats = {
				_id: course._id,
				courseName: course.courseName,
				courseDescription: course.courseDescription,
				totalStudents,
				totalRevenue,
			};
			return courseStats;
		});
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: courseDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}
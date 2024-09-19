// Function to trigger the file input click when the button is clicked
document.getElementById("edit-cover-btn").addEventListener("click", function() {
    document.getElementById("cover-image-input").click();
});
document.getElementById("edit-profile-pic-btn").addEventListener("click", function() {
    document.getElementById("Profile_images-input").click();
});
    // Function to change the cover image when a file is selected using parameters for input and image element
    function changeCoverImage(inputElementId, coverImageElementId) {
    const input = document.getElementById(inputElementId);
    const coverImage = document.getElementById(coverImageElementId);
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            coverImage.src = e.target.result;  // Set the new image source
        }
        reader.readAsDataURL(input.files[0]); // Read the file as a data URL
    }
}
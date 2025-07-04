function generateOTP() {
    let digits = [0,1,2,3,4,5,6,7,8,9];
    let otp = "";

    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    document.getElementById('t1').textContent = otp;
}

// Attach event listener AFTER page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bt').addEventListener('click', generateOTP);
});

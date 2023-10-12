let photos = [
    './photos/100000.jpg',
    './photos/100001.jpg',
	'./photos/100002.jpg',
];
let currentPhotoIndex = 0;
let photoElement = document.getElementById('photo');

setInterval(() => {
    let randomMode = Math.floor(Math.random() * 4);

    switch (randomMode) {
        case 0:
            // 淡入淡出
            photoElement.style.opacity = 0;
            setTimeout(() => {
                nextPhoto();
                photoElement.style.opacity = 1;
            }, 1000);
            break;
        case 1:
            // 从左向右滑动
            photoElement.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                nextPhoto();
                photoElement.style.transform = 'translateX(0)';
            }, 1000);
            break;
        case 2:
            // 从上到下滑动
            photoElement.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                nextPhoto();
                photoElement.style.transform = 'translateY(0)';
            }, 1000);
            break;
        case 3:
            // 缩放
            photoElement.style.transform = 'scale(0)';
            setTimeout(() => {
                nextPhoto();
                photoElement.style.transform = 'scale(1)';
            }, 1000);
            break;
		case 4:
			photoElement.classList.add('flipping');
			setTimeout(() => {
				nextPhoto();
				photoElement.classList.remove('flipping');
			}, 1000);
			break;
		case 5:
			photoElement.classList.add('rolling-horizontally');
			setTimeout(() => {
				nextPhoto();
				photoElement.classList.remove('rolling-horizontally');
			}, 1000);
			break;

		case 6:
			photoElement.classList.add('rolling-vertically');
			setTimeout(() => {
				nextPhoto();
				photoElement.classList.remove('rolling-vertically');
			}, 1000);
			break;

		case 7:
			photoElement.classList.add('zooming-out');
			setTimeout(() => {
				nextPhoto();
				photoElement.classList.remove('zooming-out');
			}, 1000);
			break;
    }
	
}, 2000);

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photoElement.src = photos[currentPhotoIndex];
}

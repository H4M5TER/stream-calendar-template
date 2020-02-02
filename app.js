function downloadAsCanvas() {
	domtoimage.toBlob(document.querySelector(".main")).then(blob => {
		saveAs(blob, "cover" + new Date().getTime() + ".png");
	});
}

window.onload = () => {
	var sheet = document.getElementById("sheet");
	var sample = document.createElement("img");
	sample.setAttribute("class", "sample");
	sample.setAttribute("src", "img/fish.png");
	for (i = 0; i < 14; i++) {
		sample.setAttribute("order", i);
		sample = sheet.appendChild(sample).cloneNode();
	}
	document.querySelectorAll(".sample").forEach(img => img.onclick = () => {
		var input = document.getElementById("image_uploads");
		input.click();
		if (input.files.length === 1)
			img.setAttribute("src", window.URL.createObjectURL(input.files[0]));
	})
};

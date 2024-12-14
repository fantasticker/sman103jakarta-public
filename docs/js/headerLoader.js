document.addEventListener("DOMContentLoaded", () => {
	const headerElement = document.getElementById("header");
	if (headerElement) {
		fetch("header.html")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.text();
			})
			.then((data) => {
				headerElement.innerHTML = data;
			})
			.catch((error) => console.error(`error loading header:`, error));
	}
});

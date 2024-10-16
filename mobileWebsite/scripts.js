$(document).ready(function () {
    const goButton = document.getElementById("goButton");
    const img = document.getElementById("carouselImg");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    let imageIndex = 0;
    let images = [
      "https://media.istockphoto.com/id/1169550733/photo/soldering-a-micro-chip-processor-with-iron-tool-green-circuit-boad-electroncs-service.jpg?s=612x612&w=0&k=20&c=Yyb-dgGztw9oK6P1lqF7QEpp7GVgnD7B3Ln-cDlLtak=",
      "https://media.istockphoto.com/id/582273084/photo/man-working-with-leather.jpg?s=612x612&w=0&k=20&c=qp0rpPDeGNH0VC8dZxAjrb5XOQOtJdYoXu7gtGxFTn4=",
      "https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=07DAFiujCb58Zgu5ZArLprHiSKew5pCGqbTnop9GclA=",
      "https://t4.ftcdn.net/jpg/02/57/33/93/360_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg"
    ];
    let imageCount = images.length - 1;
    $(prev).click(function (e) {
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = imageCount;
        }
        console.log(imageIndex);
        setImage();
    });
    $(next).click(function (e) {
        imageIndex++;
        if (imageIndex > imageCount) {
            imageIndex = 0;
        }
        console.log(imageIndex);
        setImage();
    });
    function setImage(e) {
        $(img).attr("src", images[imageIndex]);
    }
});
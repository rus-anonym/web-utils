class UtilsWeb {
    public redirect(url: string) {
        const element = document.createElement("a");
        element.href = url;
        element.target = "_blank";
        element.click();
    };
}

export default UtilsWeb;

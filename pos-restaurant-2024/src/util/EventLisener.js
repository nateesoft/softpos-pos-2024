export const handleEnter = (evt) => {
    if (evt.key === "Enter") {
        const form = evt.target.form;
        const index = [...form].indexOf(evt.target);
        form[index + 2].focus();
        evt.preventDefault();
    }
}
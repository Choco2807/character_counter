function Count(str) {
    $("#length_all").text(str.replace(/\n/g, "").length);
    $("#length_nospace").text(str.replace(/\s+/g, "").length);
    if (str != "") {
        $("#length_line").text((str.match(/\n/g) || []).length + 1);
        $("#length_paragraphs").text((str.match(/\n\s+/g) || []).length + 1);
        $("#length_manuscript").text(Math.ceil(str.replace(/\n/g, "").length / 400));
    } else {
        $("#length_line").text(0);
        $("#length_paragraphs").text(0);
        $("#length_manuscript").text(0);
    }
}

function reset() {
    $("#text_input").val("");
    Count("");
}
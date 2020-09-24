
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

// Invoked by the "Encode" command
nova.commands.register("base64.encode", (editor) => {
    // Replaces the selected text with Base-64-encoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = btoa(text);
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});

// Invoked by the "Decode" command
nova.commands.register("base64.decode", (editor) => {
    // Replaces the selected text with Base-64-decoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = atob(text);
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});


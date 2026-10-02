const input = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let markdown = input.value;

  markdown = markdown.replace(/^\s*### (.+)$/gm, "<h3>$1</h3>");
  markdown = markdown.replace(/^\s*## (.+)$/gm, "<h2>$1</h2>");
  markdown = markdown.replace(/^\s*# (.+)$/gm, "<h1>$1</h1>");

  markdown = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">',
  );

  markdown = markdown.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>',
  );

  markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  markdown = markdown.replace(/__(.*?)__/g, "<strong>$1</strong>");

  markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");

  markdown = markdown.replace(/_(.*?)_/g, "<em>$1</em>");

  markdown = markdown.replace(/^\s*>\s(.+)$/gm, "<blockquote>$1</blockquote>");

  return markdown;
}

input.addEventListener("input", () => {
  const html = convertMarkdown();

  output.textContent = html;

  preview.innerHTML = html;
});

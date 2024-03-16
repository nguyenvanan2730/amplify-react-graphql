import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return(
    <>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <title>[Ngữ Pháp]: ～に限らず</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\t/* cspell:disable-file */\n\t/* webkit printing magic: print all background colors */\n\thtml {\n\t\t-webkit-print-color-adjust: exact;\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t\t-webkit-print-color-adjust: exact;\n\t}\n\t\n\thtml,\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t@media only screen {\n\t\tbody {\n\t\t\tmargin: 2em auto;\n\t\t\tmax-width: 900px;\n\t\t\tcolor: rgb(55, 53, 47);\n\t\t}\n\t}\n\t\n\tbody {\n\t\tline-height: 1.5;\n\t\twhite-space: pre-wrap;\n\t}\n\t\n\ta,\n\ta.visited {\n\t\tcolor: inherit;\n\t\ttext-decoration: underline;\n\t}\n\t\n\t.pdf-relative-link-path {\n\t\tfont-size: 80%;\n\t\tcolor: #444;\n\t}\n\t\n\th1,\n\th2,\n\th3 {\n\t\tletter-spacing: -0.01em;\n\t\tline-height: 1.2;\n\t\tfont-weight: 600;\n\t\tmargin-bottom: 0;\n\t}\n\t\n\t.page-title {\n\t\tfont-size: 2.5rem;\n\t\tfont-weight: 700;\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 0.75em;\n\t}\n\t\n\th1 {\n\t\tfont-size: 1.875rem;\n\t\tmargin-top: 1.875rem;\n\t}\n\t\n\th2 {\n\t\tfont-size: 1.5rem;\n\t\tmargin-top: 1.5rem;\n\t}\n\t\n\th3 {\n\t\tfont-size: 1.25rem;\n\t\tmargin-top: 1.25rem;\n\t}\n\t\n\t.source {\n\t\tborder: 1px solid #ddd;\n\t\tborder-radius: 3px;\n\t\tpadding: 1.5em;\n\t\tword-break: break-all;\n\t}\n\t\n\t.callout {\n\t\tborder-radius: 3px;\n\t\tpadding: 1rem;\n\t}\n\t\n\tfigure {\n\t\tmargin: 1.25em 0;\n\t\tpage-break-inside: avoid;\n\t}\n\t\n\tfigcaption {\n\t\topacity: 0.5;\n\t\tfont-size: 85%;\n\t\tmargin-top: 0.5em;\n\t}\n\t\n\tmark {\n\t\tbackground-color: transparent;\n\t}\n\t\n\t.indented {\n\t\tpadding-left: 1.5em;\n\t}\n\t\n\thr {\n\t\tbackground: transparent;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 1px;\n\t\tvisibility: visible;\n\t\tborder: none;\n\t\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n\t}\n\t\n\timg {\n\t\tmax-width: 100%;\n\t}\n\t\n\t@media only print {\n\t\timg {\n\t\t\tmax-height: 100vh;\n\t\t\tobject-fit: contain;\n\t\t}\n\t}\n\t\n\t@page {\n\t\tmargin: 1in;\n\t}\n\t\n\t.collection-content {\n\t\tfont-size: 0.875rem;\n\t}\n\t\n\t.column-list {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t\n\t.column {\n\t\tpadding: 0 1em;\n\t}\n\t\n\t.column:first-child {\n\t\tpadding-left: 0;\n\t}\n\t\n\t.column:last-child {\n\t\tpadding-right: 0;\n\t}\n\t\n\t.table_of_contents-item {\n\t\tdisplay: block;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.3;\n\t\tpadding: 0.125rem;\n\t}\n\t\n\t.table_of_contents-indent-1 {\n\t\tmargin-left: 1.5rem;\n\t}\n\t\n\t.table_of_contents-indent-2 {\n\t\tmargin-left: 3rem;\n\t}\n\t\n\t.table_of_contents-indent-3 {\n\t\tmargin-left: 4.5rem;\n\t}\n\t\n\t.table_of_contents-link {\n\t\ttext-decoration: none;\n\t\topacity: 0.7;\n\t\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n\t}\n\t\n\ttable,\n\tth,\n\ttd {\n\t\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\t\tborder-collapse: collapse;\n\t}\n\t\n\ttable {\n\t\tborder-left: none;\n\t\tborder-right: none;\n\t}\n\t\n\tth,\n\ttd {\n\t\tfont-weight: normal;\n\t\tpadding: 0.25em 0.5em;\n\t\tline-height: 1.5;\n\t\tmin-height: 1.5em;\n\t\ttext-align: left;\n\t}\n\t\n\tth {\n\t\tcolor: rgba(55, 53, 47, 0.6);\n\t}\n\t\n\tol,\n\tul {\n\t\tmargin: 0;\n\t\tmargin-block-start: 0.6em;\n\t\tmargin-block-end: 0.6em;\n\t}\n\t\n\tli > ol:first-child,\n\tli > ul:first-child {\n\t\tmargin-block-start: 0.6em;\n\t}\n\t\n\tul > li {\n\t\tlist-style: disc;\n\t}\n\t\n\tul.to-do-list {\n\t\tpadding-inline-start: 0;\n\t}\n\t\n\tul.to-do-list > li {\n\t\tlist-style: none;\n\t}\n\t\n\t.to-do-children-checked {\n\t\ttext-decoration: line-through;\n\t\topacity: 0.375;\n\t}\n\t\n\tul.toggle > li {\n\t\tlist-style: none;\n\t}\n\t\n\tul {\n\t\tpadding-inline-start: 1.7em;\n\t}\n\t\n\tul > li {\n\t\tpadding-left: 0.1em;\n\t}\n\t\n\tol {\n\t\tpadding-inline-start: 1.6em;\n\t}\n\t\n\tol > li {\n\t\tpadding-left: 0.2em;\n\t}\n\t\n\t.mono ol {\n\t\tpadding-inline-start: 2em;\n\t}\n\t\n\t.mono ol > li {\n\t\ttext-indent: -0.4em;\n\t}\n\t\n\t.toggle {\n\t\tpadding-inline-start: 0em;\n\t\tlist-style-type: none;\n\t}\n\t\n\t/* Indent toggle children */\n\t.toggle > li > details {\n\t\tpadding-left: 1.7em;\n\t}\n\t\n\t.toggle > li > details > summary {\n\t\tmargin-left: -1.1em;\n\t}\n\t\n\t.selected-value {\n\t\tdisplay: inline-block;\n\t\tpadding: 0 0.5em;\n\t\tbackground: rgba(206, 205, 202, 0.5);\n\t\tborder-radius: 3px;\n\t\tmargin-right: 0.5em;\n\t\tmargin-top: 0.3em;\n\t\tmargin-bottom: 0.3em;\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.collection-title {\n\t\tdisplay: inline-block;\n\t\tmargin-right: 1em;\n\t}\n\t\n\t.page-description {\n\t\tmargin-bottom: 2em;\n\t}\n\t\n\t.simple-table {\n\t\tmargin-top: 1em;\n\t\tfont-size: 0.875rem;\n\t\tempty-cells: show;\n\t}\n\t.simple-table td {\n\t\theight: 29px;\n\t\tmin-width: 120px;\n\t}\n\t\n\t.simple-table th {\n\t\theight: 29px;\n\t\tmin-width: 120px;\n\t}\n\t\n\t.simple-table-header-color {\n\t\tbackground: rgb(247, 246, 243);\n\t\tcolor: black;\n\t}\n\t.simple-table-header {\n\t\tfont-weight: 500;\n\t}\n\t\n\ttime {\n\t\topacity: 0.5;\n\t}\n\t\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tmax-width: 1.2em;\n\t\tmax-height: 1.2em;\n\t\ttext-decoration: none;\n\t\tvertical-align: text-bottom;\n\t\tmargin-right: 0.5em;\n\t}\n\t\n\timg.icon {\n\t\tborder-radius: 3px;\n\t}\n\t\n\t.user-icon {\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t\tborder-radius: 100%;\n\t\tmargin-right: 0.5rem;\n\t}\n\t\n\t.user-icon-inner {\n\t\tfont-size: 0.8em;\n\t}\n\t\n\t.text-icon {\n\t\tborder: 1px solid #000;\n\t\ttext-align: center;\n\t}\n\t\n\t.page-cover-image {\n\t\tdisplay: block;\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t\tmax-height: 30vh;\n\t}\n\t\n\t.page-header-icon {\n\t\tfont-size: 3rem;\n\t\tmargin-bottom: 1rem;\n\t}\n\t\n\t.page-header-icon-with-cover {\n\t\tmargin-top: -0.72em;\n\t\tmargin-left: 0.07em;\n\t}\n\t\n\t.page-header-icon img {\n\t\tborder-radius: 3px;\n\t}\n\t\n\t.link-to-page {\n\t\tmargin: 1em 0;\n\t\tpadding: 0;\n\t\tborder: none;\n\t\tfont-weight: 500;\n\t}\n\t\n\tp > .user {\n\t\topacity: 0.5;\n\t}\n\t\n\ttd > .user,\n\ttd > time {\n\t\twhite-space: nowrap;\n\t}\n\t\n\tinput[type=\"checkbox\"] {\n\t\ttransform: scale(1.5);\n\t\tmargin-right: 0.6em;\n\t\tvertical-align: middle;\n\t}\n\t\n\tp {\n\t\tmargin-top: 0.5em;\n\t\tmargin-bottom: 0.5em;\n\t}\n\t\n\t.image {\n\t\tborder: none;\n\t\tmargin: 1.5em 0;\n\t\tpadding: 0;\n\t\tborder-radius: 0;\n\t\ttext-align: center;\n\t}\n\t\n\t.code,\n\tcode {\n\t\tbackground: rgba(135, 131, 120, 0.15);\n\t\tborder-radius: 3px;\n\t\tpadding: 0.2em 0.4em;\n\t\tborder-radius: 3px;\n\t\tfont-size: 85%;\n\t\ttab-size: 2;\n\t}\n\t\n\tcode {\n\t\tcolor: #eb5757;\n\t}\n\t\n\t.code {\n\t\tpadding: 1.5em 1em;\n\t}\n\t\n\t.code-wrap {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-all;\n\t}\n\t\n\t.code > code {\n\t\tbackground: none;\n\t\tpadding: 0;\n\t\tfont-size: 100%;\n\t\tcolor: inherit;\n\t}\n\t\n\tblockquote {\n\t\tfont-size: 1.25em;\n\t\tmargin: 1em 0;\n\t\tpadding-left: 1em;\n\t\tborder-left: 3px solid rgb(55, 53, 47);\n\t}\n\t\n\t.bookmark {\n\t\ttext-decoration: none;\n\t\tmax-height: 8em;\n\t\tpadding: 0;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: stretch;\n\t}\n\t\n\t.bookmark-title {\n\t\tfont-size: 0.85em;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\theight: 1.75em;\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.bookmark-text {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t\n\t.bookmark-info {\n\t\tflex: 4 1 180px;\n\t\tpadding: 12px 14px 14px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t}\n\t\n\t.bookmark-image {\n\t\twidth: 33%;\n\t\tflex: 1 1 180px;\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\tobject-fit: cover;\n\t\tborder-radius: 1px;\n\t}\n\t\n\t.bookmark-description {\n\t\tcolor: rgba(55, 53, 47, 0.6);\n\t\tfont-size: 0.75em;\n\t\toverflow: hidden;\n\t\tmax-height: 4.5em;\n\t\tword-break: break-word;\n\t}\n\t\n\t.bookmark-href {\n\t\tfont-size: 0.75em;\n\t\tmargin-top: 0.25em;\n\t}\n\t\n\t.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\t.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n\t.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n\t.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n\t.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n\t.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n\t.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n\t.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n\t.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n\t.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n\t.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n\t.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n\t.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n\t.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n\t.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n\t.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n\t.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n\t.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n\t.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n\t.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n\t.highlight-default {\n\t\tcolor: rgba(55, 53, 47, 1);\n\t}\n\t.highlight-gray {\n\t\tcolor: rgba(120, 119, 116, 1);\n\t\tfill: rgba(120, 119, 116, 1);\n\t}\n\t.highlight-brown {\n\t\tcolor: rgba(159, 107, 83, 1);\n\t\tfill: rgba(159, 107, 83, 1);\n\t}\n\t.highlight-orange {\n\t\tcolor: rgba(217, 115, 13, 1);\n\t\tfill: rgba(217, 115, 13, 1);\n\t}\n\t.highlight-yellow {\n\t\tcolor: rgba(203, 145, 47, 1);\n\t\tfill: rgba(203, 145, 47, 1);\n\t}\n\t.highlight-teal {\n\t\tcolor: rgba(68, 131, 97, 1);\n\t\tfill: rgba(68, 131, 97, 1);\n\t}\n\t.highlight-blue {\n\t\tcolor: rgba(51, 126, 169, 1);\n\t\tfill: rgba(51, 126, 169, 1);\n\t}\n\t.highlight-purple {\n\t\tcolor: rgba(144, 101, 176, 1);\n\t\tfill: rgba(144, 101, 176, 1);\n\t}\n\t.highlight-pink {\n\t\tcolor: rgba(193, 76, 138, 1);\n\t\tfill: rgba(193, 76, 138, 1);\n\t}\n\t.highlight-red {\n\t\tcolor: rgba(212, 76, 71, 1);\n\t\tfill: rgba(212, 76, 71, 1);\n\t}\n\t.highlight-gray_background {\n\t\tbackground: rgba(241, 241, 239, 1);\n\t}\n\t.highlight-brown_background {\n\t\tbackground: rgba(244, 238, 238, 1);\n\t}\n\t.highlight-orange_background {\n\t\tbackground: rgba(251, 236, 221, 1);\n\t}\n\t.highlight-yellow_background {\n\t\tbackground: rgba(251, 243, 219, 1);\n\t}\n\t.highlight-teal_background {\n\t\tbackground: rgba(237, 243, 236, 1);\n\t}\n\t.highlight-blue_background {\n\t\tbackground: rgba(231, 243, 248, 1);\n\t}\n\t.highlight-purple_background {\n\t\tbackground: rgba(244, 240, 247, 0.8);\n\t}\n\t.highlight-pink_background {\n\t\tbackground: rgba(249, 238, 243, 0.8);\n\t}\n\t.highlight-red_background {\n\t\tbackground: rgba(253, 235, 236, 1);\n\t}\n\t.block-color-default {\n\t\tcolor: inherit;\n\t\tfill: inherit;\n\t}\n\t.block-color-gray {\n\t\tcolor: rgba(120, 119, 116, 1);\n\t\tfill: rgba(120, 119, 116, 1);\n\t}\n\t.block-color-brown {\n\t\tcolor: rgba(159, 107, 83, 1);\n\t\tfill: rgba(159, 107, 83, 1);\n\t}\n\t.block-color-orange {\n\t\tcolor: rgba(217, 115, 13, 1);\n\t\tfill: rgba(217, 115, 13, 1);\n\t}\n\t.block-color-yellow {\n\t\tcolor: rgba(203, 145, 47, 1);\n\t\tfill: rgba(203, 145, 47, 1);\n\t}\n\t.block-color-teal {\n\t\tcolor: rgba(68, 131, 97, 1);\n\t\tfill: rgba(68, 131, 97, 1);\n\t}\n\t.block-color-blue {\n\t\tcolor: rgba(51, 126, 169, 1);\n\t\tfill: rgba(51, 126, 169, 1);\n\t}\n\t.block-color-purple {\n\t\tcolor: rgba(144, 101, 176, 1);\n\t\tfill: rgba(144, 101, 176, 1);\n\t}\n\t.block-color-pink {\n\t\tcolor: rgba(193, 76, 138, 1);\n\t\tfill: rgba(193, 76, 138, 1);\n\t}\n\t.block-color-red {\n\t\tcolor: rgba(212, 76, 71, 1);\n\t\tfill: rgba(212, 76, 71, 1);\n\t}\n\t.block-color-gray_background {\n\t\tbackground: rgba(241, 241, 239, 1);\n\t}\n\t.block-color-brown_background {\n\t\tbackground: rgba(244, 238, 238, 1);\n\t}\n\t.block-color-orange_background {\n\t\tbackground: rgba(251, 236, 221, 1);\n\t}\n\t.block-color-yellow_background {\n\t\tbackground: rgba(251, 243, 219, 1);\n\t}\n\t.block-color-teal_background {\n\t\tbackground: rgba(237, 243, 236, 1);\n\t}\n\t.block-color-blue_background {\n\t\tbackground: rgba(231, 243, 248, 1);\n\t}\n\t.block-color-purple_background {\n\t\tbackground: rgba(244, 240, 247, 0.8);\n\t}\n\t.block-color-pink_background {\n\t\tbackground: rgba(249, 238, 243, 0.8);\n\t}\n\t.block-color-red_background {\n\t\tbackground: rgba(253, 235, 236, 1);\n\t}\n\t.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }\n\t.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n\t.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n\t.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n\t.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n\t.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }\n\t.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n\t.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n\t.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n\t.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n\t.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n\t.select-value-color-pageGlass { background-color: undefined; }\n\t.select-value-color-washGlass { background-color: undefined; }\n\t\n\t.checkbox {\n\t\tdisplay: inline-flex;\n\t\tvertical-align: text-bottom;\n\t\twidth: 16;\n\t\theight: 16;\n\t\tbackground-size: 16px;\n\t\tmargin-left: 2px;\n\t\tmargin-right: 5px;\n\t}\n\t\n\t.checkbox-on {\n\t\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n\t}\n\t\n\t.checkbox-off {\n\t\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n\t}\n\t\t\n\t"
    }}
  />
  <article id="11574fce-772a-4486-ad95-16cba44ecae4" className="page sans">
    <header>
      <h1 className="page-title">[Ngữ Pháp]: ～に限らず</h1>
      <p className="page-description" />
    </header>
    <div className="page-body">
      <figure
        className="block-color-gray_background callout"
        style={{ whiteSpace: "pre-wrap", display: "flex" }}
        id="4cdd79cb-f226-4bfb-873c-40af9d281673"
      >
        <div style={{ fontSize: "1.5em" }}>
          <span className="icon">📒</span>
        </div>
        <div style={{ width: "100%" }}>
          <strong>
            <mark className="highlight-gray">Ý NGHĨA</mark>
          </strong>
          <strong>
            : <br />
            <br />
          </strong>
          <mark className="highlight-red">
            <strong> Không chỉ … mà còn</strong>
          </mark>
          <em>
            <mark className="highlight-red">（だけでなく…も）</mark>
          </em>
        </div>
      </figure>
      <figure
        className="block-color-gray_background callout"
        style={{ whiteSpace: "pre-wrap", display: "flex" }}
        id="c642baa9-539e-4da2-9864-1ee96623ef6d"
      >
        <div style={{ fontSize: "1.5em" }}>
          <span className="icon">⚙️</span>
        </div>
        <div style={{ width: "100%" }}>
          <strong>
            <mark className="highlight-gray">CẤU TRÚC</mark>
          </strong>
          <strong>: </strong>
          <mark className="highlight-blue">
            <br />
            <br />
          </mark>
          <strong>
            <mark className="highlight-red">N　</mark>
          </strong>
          +<mark className="highlight-blue"> に限らず</mark>
        </div>
      </figure>
      <details open="">
        <summary
          style={{
            fontWeight: 600,
            fontSize: "1.25em",
            lineHeight: "1.3",
            margin: 0
          }}
        >
          <mark className="highlight-gray">Cách Dùng:</mark>
        </summary>
        <div className="indented">
          <p id="e46fa96f-02a0-4faf-9170-ff8d071a8950" className="">
            ≫ Diễn tả không chỉ trong phạm vi này, mà còn ở phạm vi khác nữa,
            rộng hơn hoặc bằng.{" "}
          </p>
          <p id="a9d8360a-eb82-444d-97a4-55d0789894aa" className="">
            ≫ Vế sau thường có 「も」.
          </p>
        </div>
      </details>
      <details open="">
        <summary
          style={{
            fontWeight: 600,
            fontSize: "1.25em",
            lineHeight: "1.3",
            margin: 0
          }}
        >
          <mark className="highlight-gray">Ví Dụ: </mark>
        </summary>
        <div className="indented">
          <ol
            type={1}
            id="e44230be-000d-4fd6-9ef3-c4b893f5cbe6"
            className="numbered-list"
            start={1}
          >
            <li>
              外国人<mark className="highlight-red">に限らず</mark>
              、日本人でも正しくない敬語を使う人がいます。
              <br />→ Không chỉ người nước ngoài, mà nhiều người Nhật cũng sử
              dụng kính ngữ không chính xác. <br />
            </li>
          </ol>
          <ol
            type={1}
            id="4c6b3f0e-529f-4210-9a38-02b8db2393d1"
            className="numbered-list"
            start={2}
          >
            <li>
              この美容院は女性<mark className="highlight-red">に限らず</mark>
              、男性客も多い。
              <br />→ Tiệm làm đẹp này không chỉ có khách hàng nữ, mà còn có
              nhiều khách nam.
              <br />
            </li>
          </ol>
          <ol
            type={1}
            id="6cae0729-12cf-49aa-96b9-489cffde5cf5"
            className="numbered-list"
            start={3}
          >
            <li>
              このレストランは週末
              <mark className="highlight-red">に限らず</mark>、平日も客が多い。
              <br />→ Nhà hàng này không chỉ đông khách vào cuối tuần mà các
              ngày trong tuần cũng vậy.
              <br />
            </li>
          </ol>
          <ol
            type={1}
            id="cc7a6dba-67b1-418f-aa24-026a91a45908"
            className="numbered-list"
            start={4}
          >
            <li>
              この漫画は子供<mark className="highlight-red">に限らず</mark>
              、大人も楽しめます。
              <br />→ Truyện tranh này không chỉ mỗi trẻ em mà người lớn cũng
              thích.
              <br />
            </li>
          </ol>
          <ol
            type={1}
            id="15aef67b-b287-4d82-9607-1f38b9224c2a"
            className="numbered-list"
            start={5}
          >
            <li>
              最近、女性<mark className="highlight-red">に限らず</mark>
              、男性も肌の手入れをする。
              <br />→ Gần đây, không chỉ phụ nữ mà cả nam giới cũng chăm sóc da.
              <br />
            </li>
          </ol>
          <ol
            type={1}
            id="f617072b-d673-42c3-a479-aae969a62f70"
            className="numbered-list"
            start={6}
          >
            <li>
              鈴木さんは今日<mark className="highlight-red">に限らず</mark>
              、いつも明るい。
              <br />→ Anh Suzuki không chỉ mỗi hôm nay mà lúc nào anh ấy cũng
              vui vẻ, hòa đồng như thế đấy.
              <br />
            </li>
          </ol>
          <ol
            type={1}
            id="b5e93f8c-9464-4062-852f-89aa7fdc413a"
            className="numbered-list"
            start={7}
          >
            <li>
              アニメは日本<mark className="highlight-red">に限らず</mark>
              、世界で人気だ。
              <br />→ Anime không chỉ được yêu thích ở Nhật Bản mà còn trên toàn
              thế giới.
              <br />
            </li>
          </ol>
          <ol
            type={1}
            id="554c0cb1-082e-43d0-83af-0e6b53326c7c"
            className="numbered-list"
            start={8}
          >
            <li>
              あのアイドルは若者<mark className="highlight-red">に限らず</mark>
              お年寄りにも知られている。
              <br />→ Idol đó không chỉ có giới trẻ mà cả người cao tuổi cũng
              biết đến.
              <br />
            </li>
          </ol>
        </div>
      </details>
      <p id="8f5b0721-c7b9-49fd-918a-6e81782b7c1b" className=""></p>
    </div>
  </article>
  <span className="sans" style={{ fontSize: 14, paddingTop: "2em" }} />
</>

  )
}


export default withAuthenticator(App);
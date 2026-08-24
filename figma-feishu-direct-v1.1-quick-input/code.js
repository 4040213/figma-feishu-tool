figma.showUI(__html__, {
  width: 440,
  height: 720
});
const EXPLICIT_ITALIC_START = "\ue110";
const EXPLICIT_ITALIC_END = "\ue111";
const FRACTION_AXIS_FROM_BASELINE_RATIO = 0.32;
const STANDARD_TEXT_FONT_SIZE = 34;
const LIGHTBULB_TEXT_FONT_SIZE = 24;
const SQUARE_PLACEHOLDER_SIZE_OFFSET = 4;
const QUESTION_MAX_TEXT_WIDTH = 1334;
const LIGHTBULB_TITLE_SVG_BASE64 = "PHN2ZyB3aWR0aD0iMTExIiBoZWlnaHQ9IjM3IiB2aWV3Qm94PSIwIDAgMTExIDM3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0iJiMyMzE7JiMxMjk7JiMxNzU7JiMyMzA7JiMxNzk7JiMxNjE7LyYjMjI5OyYjMTMzOyYjMTgzOyYjMjI4OyYjMTg5OyYjMTQ3OyYjMjMwOyYjMTQzOyYjMTQ0OyYjMjMxOyYjMTY0OyYjMTg2OyI+CjxnIGlkPSImIzIzMDsmIzE0MzsmIzE0NDsmIzIzMTsmIzE2NDsmIzE4NjsmIzIzMDsmIzE2MDsmIzEzNTsmIzIzMzsmIzE2MjsmIzE1MjsiPgo8ZyBpZD0iUmVjdGFuZ2xlIDM2MzQiIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2lfMF8xKSI+CjxyZWN0IHg9IjEwLjQzMzYiIHk9IjEuNDMyMzciIHdpZHRoPSIxMDAiIGhlaWdodD0iMzQiIHJ4PSIxMiIgZmlsbD0iI0Y5QzE2QSIvPgo8L2c+CjxwYXRoIGlkPSImIzIzMDsmIzE0MzsmIzE0NDsmIzIzMTsmIzE2NDsmIzE4NjsyIiBkPSJNNDQuMzI0MiAxMC45OTQ5SDQ1LjYxMzNWOC40MTY3NUM0NS42NzA2IDcuNzg2NTQgNDYuMTAwMyA3LjQ0Mjc5IDQ2LjkwMjMgNy4zODU1QzQ3LjY0NzEgNy40NDI3OSA0OC4wNDgyIDcuNzg2NTQgNDguMTA1NSA4LjQxNjc1VjEwLjk5NDlINDguNzkzQzQ5LjQyMzIgMTEuMDUyMiA0OS43MzgzIDExLjQ4MTkgNDkuNzM4MyAxMi4yODM5QzQ5LjY4MSAxMy4wMjg3IDQ5LjMzNzIgMTMuNDI5OCA0OC43MDcgMTMuNDg3MUg0OC4xMDU1VjE2LjU4MDhDNDguMTYyOCAxNi41MjM1IDQ4LjMzNDYgMTYuNDY2MiA0OC42MjExIDE2LjQwODlDNDguNTA2NSAxNi40MDg5IDQ4LjU2MzggMTYuMzgwMyA0OC43OTMgMTYuMzIzQzQ5LjQ4MDUgMTYuMjA4NCA0OS44ODE1IDE2LjQ5NDkgNDkuOTk2MSAxNy4xODI0SDYyLjYyODlDNjMuMjU5MSAxNy4yMzk3IDYzLjYwMjkgMTcuNjQwNyA2My42NjAyIDE4LjM4NTVDNjMuNjAyOSAxOS4xODc2IDYzLjI1OTEgMTkuNjE3MyA2Mi42Mjg5IDE5LjY3NDZINTcuNDcyN1YyMC43OTE3SDYyLjM3MTFDNjMuMDU4NiAyMC44NDkgNjMuNDMxIDIxLjI1MDEgNjMuNDg4MyAyMS45OTQ5QzYzLjQzMSAyMi43Mzk3IDYzLjA1ODYgMjMuMTQwNyA2Mi4zNzExIDIzLjE5OEg1Ny40NzI3VjI0LjkxNjdDNTguMjc0NyAyNC45NzQgNTkuOTkzNSAyNS4wMDI3IDYyLjYyODkgMjUuMDAyN0M2My4zMTY0IDI1LjAwMjcgNjMuNjYwMiAyNS40MDM3IDYzLjY2MDIgMjYuMjA1OEM2My42NjAyIDI3LjA2NTIgNjMuMzE2NCAyNy40OTQ5IDYyLjYyODkgMjcuNDk0OUM2MC4wNTA4IDI3LjQ5NDkgNTguMzMyIDI3LjQ2NjIgNTcuNDcyNyAyNy40MDg5QzU0LjYwODEgMjcuMzUxNiA1Mi43MTc0IDI2Ljc3ODcgNTEuODAwOCAyNS42OTAyQzUxLjc0MzUgMjUuODA0OCA1MS42NTc2IDI1Ljk0OCA1MS41NDMgMjYuMTE5OUM1MS4wODQ2IDI2Ljc1MDEgNTAuNzEyMiAyNy4yMDg0IDUwLjQyNTggMjcuNDk0OUM0OS44NTI5IDI4LjA2NzggNDkuMjUxMyAyOC4xODI0IDQ4LjYyMTEgMjcuODM4NkM0Ny45OTA5IDI3LjIwODQgNDcuOTMzNiAyNi42MDY5IDQ4LjQ0OTIgMjYuMDMzOUM0OS41OTUxIDI0LjcxNjIgNTAuMzExMiAyMy4wODM0IDUwLjU5NzcgMjEuMTM1NUM1MC42NTQ5IDIwLjMzMzQgNTEuMDU2IDE5Ljk2MSA1MS44MDA4IDIwLjAxODNDNTIuNjAyOSAyMC4wMTgzIDUzLjAwMzkgMjAuNDc2NiA1My4wMDM5IDIxLjM5MzNDNTMuMDAzOSAyMi4wMjM1IDUyLjg4OTMgMjIuNjI1MSA1Mi42NjAyIDIzLjE5OEM1My4zNDc3IDIzLjgyODIgNTQuMDkyNCAyNC4yODY1IDU0Ljg5NDUgMjQuNTczVjE5LjY3NDZINTAuMjUzOUM0OS43MzgzIDE5LjYxNzMgNDkuNDUxOCAxOS4yNzM1IDQ5LjM5NDUgMTguNjQzM0M0OC44Nzg5IDE4LjkyOTggNDguNDQ5MiAxOS4xODc2IDQ4LjEwNTUgMTkuNDE2N1YyNS42MDQyQzQ4LjE2MjggMjcuMDM2NSA0Ny40MTggMjcuNzI0IDQ1Ljg3MTEgMjcuNjY2N0g0NS40NDE0QzQzLjgzNzIgMjcuNjY2NyA0My4xMjExIDI3LjEyMjUgNDMuMjkzIDI2LjAzMzlDNDMuNDA3NiAyNS4yODkxIDQzLjc1MTMgMjQuOTE2NyA0NC4zMjQyIDI0LjkxNjdDNDQuMzgxNSAyNC45MTY3IDQ0LjQ2NzQgMjQuOTE2NyA0NC41ODIgMjQuOTE2N0M0NC43NTM5IDI0Ljk3NCA0NC44OTcxIDI1LjAwMjcgNDUuMDExNyAyNS4wMDI3QzQ1LjQxMjggMjUuMDYgNDUuNjEzMyAyNC45MTY3IDQ1LjYxMzMgMjQuNTczVjIwLjI3NjFDNDUuMzI2OCAyMC4zMzM0IDQ1LjA5NzcgMjAuNDE5NCA0NC45MjU4IDIwLjUzMzlDNDQuMTgxIDIwLjcwNTggNDMuNjk0IDIwLjQ3NjYgNDMuNDY0OCAxOS44NDY0QzQzLjE3ODQgMTkuMTAxNiA0My4zNzg5IDE4LjUyODcgNDQuMDY2NCAxOC4xMjc3QzQ0LjQ2NzQgMTguMDEzMSA0NC45ODMxIDE3LjgxMjYgNDUuNjEzMyAxNy41MjYxVjEzLjQ4NzFINDQuMjM4M0M0My42MDgxIDEzLjQyOTggNDMuMjY0MyAxMy4wMDAxIDQzLjIwNyAxMi4xOThDNDMuMjY0MyAxMS40NTMyIDQzLjYzNjcgMTEuMDUyMiA0NC4zMjQyIDEwLjk5NDlaTTQ5Ljk5NjEgOS44Nzc2OUM0OS45Mzg4IDguNjc0NTYgNTAuNTQwNCA4LjEwMTY0IDUxLjgwMDggOC4xNTg5NEg2MC45OTYxQzYyLjI1NjUgOC4wNDQzNSA2Mi44Mjk0IDguNjQ1OTEgNjIuNzE0OCA5Ljk2MzYyVjE0LjUxODNDNjIuNzcyMSAxNS44OTMzIDYyLjE5OTIgMTYuNTIzNSA2MC45OTYxIDE2LjQwODlINTEuNTQzQzUwLjQ1NDQgMTYuNDY2MiA0OS45Mzg4IDE1Ljg5MzMgNDkuOTk2MSAxNC42OTAyVjkuODc3NjlaTTYwLjMwODYgMTAuNDc5Mkg1Mi4zMTY0VjExLjI1MjdINjAuMzA4NlYxMC40NzkyWk02MC4zMDg2IDE0LjE3NDZWMTMuNDAxMUg1Mi4zMTY0VjE0LjE3NDZINjAuMzA4NlpNNjguODE2NCAxMS42ODI0QzY4LjA3MTYgMTEuNjI1MSA2Ny42OTkyIDExLjE5NTQgNjcuNjk5MiAxMC4zOTMzQzY3Ljc1NjUgOS41OTEyMyA2OC4xNTc2IDkuMTYxNTQgNjguOTAyMyA5LjEwNDI1SDgyLjA1MDhDODIuODUyOSA5LjE2MTU0IDgzLjI4MjYgOS41OTEyMyA4My4zMzk4IDEwLjM5MzNDODMuMjI1MyAxMS4xOTU0IDgyLjc2NjkgMTEuNjI1MSA4MS45NjQ4IDExLjY4MjRINjguODE2NFpNNjYuOTI1OCAxNi40MDg5QzY2LjA2NjQgMTYuMzUxNiA2NS42MDgxIDE1LjkyMiA2NS41NTA4IDE1LjExOTlDNjUuNjY1NCAxNC4zMTc4IDY2LjE1MjMgMTMuODg4MSA2Ny4wMTE3IDEzLjgzMDhIODQuMDI3M0M4NC43NzIxIDEzLjg4ODEgODUuMTczMiAxNC4zMTc4IDg1LjIzMDUgMTUuMTE5OUM4NS4xNzMyIDE1LjkyMiA4NC43NDM1IDE2LjM1MTYgODMuOTQxNCAxNi40MDg5SDc3LjE1MjNWMjUuMzQ2NEM3Ny4yNjY5IDI3LjA2NTIgNzYuNTIyMSAyNy44Mzg2IDc0LjkxOCAyNy42NjY3QzcxLjc2NjkgMjcuNzI0IDcwLjMzNDYgMjcuMTUxMSA3MC42MjExIDI1Ljk0OEM3MC43MzU3IDI1LjE0NTkgNzEuMTY1NCAyNC43NzM1IDcxLjkxMDIgMjQuODMwOEM3Mi45NDE0IDI1LjAwMjcgNzMuNjU3NiAyNS4wODg2IDc0LjA1ODYgMjUuMDg4NkM3NC40MDIzIDI1LjA4ODYgNzQuNTQ1NiAyNC45MTY3IDc0LjQ4ODMgMjQuNTczVjE2LjQwODlINjYuOTI1OFpNNjUuOTgwNSAyNC43NDQ5QzY3LjEyNjMgMjMuMTQwNyA2OC4xODYyIDIxLjAyMDkgNjkuMTYwMiAxOC4zODU1QzY5LjU2MTIgMTcuNTgzNCA3MC4xMzQxIDE3LjI5NyA3MC44Nzg5IDE3LjUyNjFDNzEuNTY2NCAxNy44MTI2IDcxLjc5NTYgMTguMzg1NSA3MS41NjY0IDE5LjI0NDlDNzEuMDUwOCAyMS4yNTAxIDY5LjkzMzYgMjMuNTQxNyA2OC4yMTQ4IDI2LjExOTlDNjcuNjQxOSAyNi45MjIgNjYuOTgzMSAyNy4xMjI1IDY2LjIzODMgMjYuNzIxNEM2NS42MDgxIDI2LjI2MzEgNjUuNTIyMSAyNS42MDQyIDY1Ljk4MDUgMjQuNzQ0OVpNODIuNTY2NCAyNi4yMDU4QzgyLjUwOTEgMjYuMDMzOSA4Mi4zNjU5IDI1Ljc0NzUgODIuMTM2NyAyNS4zNDY0QzgxLjQ0OTIgMjMuNjg1IDgwLjUwMzkgMjEuODUxNiA3OS4zMDA4IDE5Ljg0NjRDNzguODQyNCAxOS4wNDQ0IDc4Ljk1NyAxOC4zODU1IDc5LjY0NDUgMTcuODY5OUM4MC4zODkzIDE3LjUyNjEgODEuMDE5NSAxNy42OTggODEuNTM1MiAxOC4zODU1QzgzLjQyNTggMjEuMzY0NyA4NC41NDMgMjMuNTcwNCA4NC44ODY3IDI1LjAwMjdDODUuMDU4NiAyNS44MDQ4IDg0Ljg1ODEgMjYuMzc3NyA4NC4yODUyIDI2LjcyMTRDODMuNTQwNCAyNy4wMDc5IDgyLjk2NzQgMjYuODM2IDgyLjU2NjQgMjYuMjA1OFoiIGZpbGw9IiM4MjNEMTkiLz4KPGcgaWQ9IkZyYW1lIDEzMTIzMTk4MTIiPgo8ZyBpZD0iYmoiPgo8ZyBpZD0iJiMyMzA7JiMxNjQ7JiMxNzM7JiMyMjk7JiMxNTY7JiMxMzQ7JiMyMjk7JiMxODk7JiMxNjI7Ij4KPGNpcmNsZSBjeD0iMTguNDMyMSIgY3k9IjE4LjQzMiIgcj0iMTYuMjI3MyIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzBfMSkiLz4KPGNpcmNsZSBjeD0iMTguNDMyMSIgY3k9IjE4LjQzMiIgcj0iMTYuMjI3MyIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzBfMSkiLz4KPGNpcmNsZSBjeD0iMTguNDMyMSIgY3k9IjE4LjQzMiIgcj0iMTYuMjI3MyIgc3Ryb2tlPSIjNkY0RjE4IiBzdHJva2Utd2lkdGg9IjEuNTQ1NDUiLz4KPGNpcmNsZSBjeD0iMTguNDMyMSIgY3k9IjE4LjQzMiIgcj0iMTYuMjI3MyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjU0NTQ1Ii8+CjwvZz4KPGcgaWQ9IiYjMjMwOyYjMTY0OyYjMTczOyYjMjI5OyYjMTU2OyYjMTM0OyYjMjI5OyYjMTg5OyYjMTYyOyYjMjI5OyYjMTY0OyYjMTM1OyYjMjI4OyYjMTg3OyYjMTg5OyA0IiBmaWx0ZXI9InVybCgjZmlsdGVyMV9mXzBfMSkiPgo8Y2lyY2xlIGN4PSIxOC40MzIxIiBjeT0iMTguNDMyIiByPSIxNC42ODE4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42MTI5NTMiIHN0cm9rZS13aWR0aD0iMS41NDU0NSIvPgo8L2c+CjxlbGxpcHNlIGlkPSImIzIzMDsmIzE2NDsmIzE3MzsmIzIyOTsmIzE1NjsmIzEzNDsmIzIyOTsmIzE4OTsmIzE2MjtfMiIgb3BhY2l0eT0iMC41IiBjeD0iMTIuMTEzNiIgY3k9IjguNDIzMDciIHJ4PSIzLjUyNzY3IiByeT0iMi4zNTE3OCIgZmlsbD0id2hpdGUiLz4KPGVsbGlwc2UgaWQ9IiYjMjMwOyYjMTY0OyYjMTczOyYjMjI5OyYjMTU2OyYjMTM0OyYjMjI5OyYjMTg5OyYjMTYyOyYjMjI5OyYjMTY0OyYjMTM1OyYjMjI4OyYjMTg3OyYjMTg5OyA1IiBvcGFjaXR5PSIwLjMiIGN4PSI2LjkzOTU2IiBjeT0iMTMuMzYyMSIgcng9IjEuMTc1ODkiIHJ5PSIxLjY0NjI1IiBmaWxsPSJ3aGl0ZSIvPgo8ZWxsaXBzZSBpZD0iJiMyMzA7JiMxNjQ7JiMxNzM7JiMyMjk7JiMxNTY7JiMxMzQ7JiMyMjk7JiMxODk7JiMxNjI7JiMyMjk7JiMxNjQ7JiMxMzU7JiMyMjg7JiMxODc7JiMxODk7IDYiIG9wYWNpdHk9IjAuOCIgY3g9IjI2LjY1OTgiIGN5PSIyOC45MzI0IiByeD0iMS42MjE0OSIgcnk9IjAuNjk0OTIyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMgMjYuNjU5OCAyOC45MzI0KSIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZyBpZD0iJiMyMzE7JiMxMjk7JiMxNzU7JiMyMzA7JiMxNzk7JiMxNjE7Ij4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxMzciIGN4PSIxOC40MzQiIGN5PSIyMC4zNjQxIiByPSI3LjUzNDA5IiBmaWxsPSIjRDlEOUQ5IiBzdHJva2U9IiNEQTg4MzgiIHN0cm9rZS13aWR0aD0iMS4xNTkwOSIvPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMjIuODgzNyAyNS4xOTQxTDIyLjg4MDMgMjcuNDA2QzIyLjg3NjcgMjkuODI0IDIwLjg3MTcgMzEuNzYxNSAxOC40MzA0IDMxLjc2MTVDMTUuOTg5MiAzMS43NjEzIDEzLjk5MDkgMjkuODIzOSAxMy45OTQ2IDI3LjQwNkwxMy45OTc5IDI1LjE5NDFIMjIuODgzN1oiIGZpbGw9IiNEOUQ5RDkiIHN0cm9rZT0iI0RBODgzOCIgc3Ryb2tlLXdpZHRoPSIxLjE1OTA5Ii8+CjxnIGlkPSJHcm91cCI+CjxnIGlkPSImIzIzMTsmIzE4ODsmIzE1MDsmIzIzMTsmIzE4NzsmIzEzMjstMTQiPgo8cGF0aCBpZD0iJiMyMzA7JiMxNjQ7JiMxNzM7JiMyMjk7JiMxNTY7JiMxMzQ7JiMyMjk7JiMxODk7JiMxNjI7XzMiIGQ9Ik0xOC40MzM3IDI3LjMxOUMyMi4yNzQ3IDI3LjMxOSAyNS4zOTI5IDI0LjIwNTQgMjUuMzk4NSAyMC4zNjQ2QzI1LjQwNCAxNi41MjM4IDIyLjI5NDggMTMuNDEwMyAxOC40NTM4IDEzLjQxMDNDMTQuNjEyOCAxMy40MTAzIDExLjQ5NDUgMTYuNTIzOCAxMS40ODkgMjAuMzY0NkMxMS40ODM0IDI0LjIwNTQgMTQuNTkyNyAyNy4zMTkgMTguNDMzNyAyNy4zMTlaIiBmaWxsPSIjRkZERTZEIi8+CjxwYXRoIGlkPSJJbnRlcnNlY3QiIGQ9Ik0xOC40NTIxIDEzLjQxMDhDMjEuMDMwMyAxMy40MTA4IDIzLjI3NjkgMTQuODE0NSAyNC40NzUgMTYuODk4NEMyNC41ODQ2IDE3LjM4ODkgMjQuNjQ0OCAxNy44OTg0IDI0LjY0NDEgMTguNDIxOUMyNC42Mzg4IDIyLjI1NjUgMjEuNTE2MyAyNS4zNjU0IDE3LjY3MDEgMjUuMzY1NUMxNS4xMDYyIDI1LjM2NTUgMTIuODY4NyAyMy45ODMzIDExLjY2MjcgMjEuOTI2NUMxMS41NDgyIDIxLjQyNDQgMTEuNDg2NCAyMC45MDE5IDExLjQ4NzIgMjAuMzY0OUMxMS40OTI4IDE2LjUyNDIgMTQuNjExMiAxMy40MTA5IDE4LjQ1MjEgMTMuNDEwOFoiIGZpbGw9IiNGRkVDNkIiLz4KPHBhdGggaWQ9IiYjMjMyOyYjMTgzOyYjMTc1OyYjMjI5OyYjMTkwOyYjMTMyOy02IiBkPSJNMTcuOTAwNiAyMi41NTIzQzE3LjU0MyAyMi4yMDgxIDE2Ljk3MzcgMjIuMjE5MyAxNi42Mjg5IDIyLjU3NzNDMTYuMjg0MiAyMi45MzU0IDE2LjI5NDYgMjMuNTA0OCAxNi42NTIxIDIzLjg0OUwxNy4yNzY0IDIzLjIwMDdMMTcuOTAwNiAyMi41NTIzWk0xOC40OTc2IDI0LjM3NjRMMTcuODczMyAyNS4wMjQ4TDE4LjUxODkgMjUuNjQ2M0wxOS4xNDMyIDI1LjAwMTdMMTguNDk3NiAyNC4zNzY0Wk0yMC4zMjQyIDIzLjc4MjNDMjAuNjcgMjMuNDI1MyAyMC42NjEzIDIyLjg1NTkgMjAuMzA0NyAyMi41MTA2QzE5Ljk0ODEgMjIuMTY1MiAxOS4zNzg4IDIyLjE3NDcgMTkuMDMzIDIyLjUzMThMMTkuNjc4NiAyMy4xNTcxTDIwLjMyNDIgMjMuNzgyM1pNMTcuMjc2NCAyMy4yMDA3TDE2LjY1MjEgMjMuODQ5TDE3Ljg3MzMgMjUuMDI0OEwxOC40OTc2IDI0LjM3NjRMMTkuMTIxOCAyMy43MjgxTDE3LjkwMDYgMjIuNTUyM0wxNy4yNzY0IDIzLjIwMDdaTTE4LjQ5NzYgMjQuMzc2NEwxOS4xNDMyIDI1LjAwMTdMMjAuMzI0MiAyMy43ODIzTDE5LjY3ODYgMjMuMTU3MUwxOS4wMzMgMjIuNTMxOEwxNy44NTIgMjMuNzUxMUwxOC40OTc2IDI0LjM3NjRaIiBmaWxsPSIjRkZDNjIwIi8+CjxwYXRoIGlkPSImIzIzMjsmIzE4MzsmIzE3NTsmIzIyOTsmIzE5MDsmIzEzMjstOCIgZD0iTTE5LjMzNCAyNC4zNzU2QzE5LjMzNDcgMjMuODc4OSAxOC45MzI2IDIzLjQ3NjIgMTguNDM1OSAyMy40NzYyQzE3LjkzOTIgMjMuNDc2MiAxNy41MzU5IDIzLjg3ODkgMTcuNTM1MiAyNC4zNzU2TDE4LjQzNDYgMjQuMzc1NkwxOS4zMzQgMjQuMzc1NlpNMTcuNTMyNCAyNi4yNjE2QzE3LjUzMTYgMjYuNzU4MyAxNy45MzM3IDI3LjE2MDkgMTguNDMwNCAyNy4xNjA5QzE4LjkyNzEgMjcuMTYwOSAxOS4zMzA0IDI2Ljc1ODMgMTkuMzMxMSAyNi4yNjE2TDE4LjQzMTcgMjYuMjYxNkwxNy41MzI0IDI2LjI2MTZaTTE4LjQzNDYgMjQuMzc1NkwxNy41MzUyIDI0LjM3NTZMMTcuNTMyNCAyNi4yNjE2TDE4LjQzMTcgMjYuMjYxNkwxOS4zMzExIDI2LjI2MTZMMTkuMzM0IDI0LjM3NTZMMTguNDM0NiAyNC4zNzU2WiIgZmlsbD0iI0ZGQzYyMCIvPgo8L2c+CjxnIGlkPSImIzIzMTsmIzE4ODsmIzE1MDsmIzIzMTsmIzE4NzsmIzEzMjstMTMiPgo8cGF0aCBpZD0iJiMyMzE7JiMxNTk7JiMxNjk7JiMyMjk7JiMxODk7JiMxNjI7IiBkPSJNMTQuNTc5NyAyNi4xNTk1TDIyLjMwNTIgMjYuMTU5OEwyMi4zMDI4IDI3LjQwNjNDMjIuMjk5OCAyOS40OTE0IDIwLjU2NzggMzEuMTgxNyAxOC40MzQ1IDMxLjE4MTZDMTYuMzAxMSAzMS4xODE2IDE0LjU3NDIgMjkuNDkxMiAxNC41NzczIDI3LjQwNjFMMTQuNTc5NyAyNi4xNTk1WiIgZmlsbD0iI0IzQjNCMyIvPgo8ZyBpZD0iTWFzayBncm91cCI+CjxtYXNrIGlkPSJtYXNrMF8wXzEiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxNCIgeT0iMjYiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiPgo8ZyBpZD0iR3JvdXBfMiI+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTE0LjU3MzggMjYuMTU5MUwyMi4yOTg4IDI2LjE1OTVMMjIuMjk2NSAyNy40MDYxQzIyLjI5MzcgMjkuNDkxNCAyMC41NjIgMzEuMTgxNyAxOC40Mjg4IDMxLjE4MTZDMTYuMjk1NiAzMS4xODE0IDE0LjU2ODYgMjkuNDkwOSAxNC41NzE1IDI3LjQwNTdMMTQuNTczOCAyNi4xNTkxWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMF8xKSI+CjxwYXRoIGlkPSImIzIzMTsmIzE1OTsmIzE2OTsmIzIyOTsmIzE4OTsmIzE2MjsmIzIyOTsmIzE2NDsmIzEzNTsmIzIyODsmIzE4NzsmIzE4OTstOSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42MDAyIDI1LjkzMDdMMjAuODk5OCAyNS45MzFMMjAuODk2OSAyNy41OTM3QzIwLjg5NDIgMjkuNDQ5IDE5LjM1MzMgMzAuOTUzMSAxNy40NTUxIDMwLjk1M0MxNS4zMjE4IDMwLjk1MjkgMTMuNTk0OCAyOS4yNjI0IDEzLjU5NzggMjcuMTc3MkwxMy42MDAyIDI1LjkzMDdaIiBmaWxsPSIjRENEQ0RBIi8+CjxwYXRoIGlkPSImIzIzMTsmIzE1OTsmIzE2OTsmIzIyOTsmIzE4OTsmIzE2MjsmIzIyOTsmIzE2NDsmIzEzNTsmIzIyODsmIzE4NzsmIzE4OTstMTIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNjY1MiAyNy41MzIxTDIzLjgwOTQgMjUuMDMzM0wyMy44MjkgMjYuMjA5OUwxMy42ODQ3IDI4LjcwMzRMMTMuNjY1MiAyNy41MzIxWiIgZmlsbD0iI0IzQjNCMyIvPgo8cGF0aCBpZD0iJiMyMzE7JiMxNTk7JiMxNjk7JiMyMjk7JiMxODk7JiMxNjI7JiMyMjk7JiMxNjQ7JiMxMzU7JiMyMjg7JiMxODc7JiMxODk7LTEyXzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNjY1MiAyOS44NTExTDIzLjgwOTQgMjcuMzUyM0wyMy44MjkgMjguNTI4OUwxMy42ODQ3IDMxLjAyMjRMMTMuNjY1MiAyOS44NTExWiIgZmlsbD0iI0IzQjNCMyIvPgo8L2c+CjwvZz4KPC9nPgo8cGF0aCBpZD0iJiMyMzA7JiMxNjQ7JiMxNzM7JiMyMjk7JiMxNTY7JiMxMzQ7JiMyMjk7JiMxODk7JiMxNjI7XzQiIG9wYWNpdHk9IjAuODI1MDMzIiBkPSJNMTUuODMyIDE5LjQyNEMxNi4zODk5IDE5LjQxMzggMTYuODM0NyAxOC45NTQ3IDE2LjgyNTQgMTguMzk4NEMxNi44MTYxIDE3Ljg0MjIgMTYuMzU2MyAxNy4zOTk1IDE1Ljc5ODMgMTcuNDA5N0MxNS4yNDA0IDE3LjQxOTkgMTQuNzk1NiAxNy44NzkgMTQuODA0OSAxOC40MzUyQzE0LjgxNDIgMTguOTkxNSAxNS4yNzQgMTkuNDM0MSAxNS44MzIgMTkuNDI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggaWQ9IiYjMjMwOyYjMTY0OyYjMTczOyYjMjI5OyYjMTU2OyYjMTM0OyYjMjI5OyYjMTg5OyYjMTYyOyYjMjI5OyYjMTY0OyYjMTM1OyYjMjI4OyYjMTg3OyYjMTg5Oy0yNCIgZD0iTTE3LjE2ODcgMTcuMTY1NEMxNy40NzUgMTcuMTU5OSAxNy43MTkyIDE2LjkwNzggMTcuNzE0MSAxNi42MDI1QzE3LjcwOSAxNi4yOTcxIDE3LjQ1NjYgMTYuMDU0MSAxNy4xNTAzIDE2LjA1OTdDMTYuODQ0IDE2LjA2NTMgMTYuNTk5OCAxNi4zMTczIDE2LjYwNDkgMTYuNjIyN0MxNi42MSAxNi45MjggMTYuODYyNSAxNy4xNzEgMTcuMTY4NyAxNy4xNjU0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxyZWN0IGlkPSJSZWN0YW5nbGUgNDEyNzMiIHg9IjE2LjY5NDkiIHk9IjUuNDg5MTgiIHdpZHRoPSIzLjQ3NzI3IiBoZWlnaHQ9IjUuMDIyNzMiIHJ4PSIxLjczODY0IiBmaWxsPSIjRkVERDAxIiBzdHJva2U9IiNEQTg4MzgiIHN0cm9rZS13aWR0aD0iMS4xNTkwOSIvPgo8cmVjdCBpZD0iUmVjdGFuZ2xlIDQxMjc0IiB4PSIyNi43MDciIHk9IjguMDg2NTMiIHdpZHRoPSIzLjQ3NzI3IiBoZWlnaHQ9IjUuMDIyNzMiIHJ4PSIxLjczODY0IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyNi43MDcgOC4wODY1MykiIGZpbGw9IiNGRUREMDEiIHN0cm9rZT0iI0RBODgzOCIgc3Ryb2tlLXdpZHRoPSIxLjE1OTA5Ii8+CjxyZWN0IGlkPSJSZWN0YW5nbGUgNDEyNzUiIHg9IjYuOTA4NzJlLTA4IiB5PSItMC44MTk2MDEiIHdpZHRoPSIzLjQ3NzI3IiBoZWlnaHQ9IjUuMDIyNzMiIHJ4PSIxLjczODY0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxMDcgMC43MDcxMDcgMC43MDcxMDcgMC43MDcxMDcgMTAuNzM5NyA4LjY2NjA3KSIgZmlsbD0iI0ZFREQwMSIgc3Ryb2tlPSIjREE4ODM4IiBzdHJva2Utd2lkdGg9IjEuMTU5MDkiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfaV8wXzEiIHg9IjEwLjQzMzYiIHk9IjEuNDMyMzciIHdpZHRoPSIxMDAiIGhlaWdodD0iMzguNTE5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSI0LjUxOTQ4Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjU5NzQiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMC44Mjk4MzYgMCAwIDAgMCAwLjU2NTQ3NCAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3dfMF8xIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2ZfMF8xIiB4PSI5LjM5MzY5ZS0wNSIgeT0iLTIuODEzMzRlLTA1IiB3aWR0aD0iMzYuODY0MSIgaGVpZ2h0PSIzNi44NjM5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuNDg4NzIiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8wXzEiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSI0LjUwMTczIiB5MT0iMi45Nzc0MiIgeDI9IjQuNTAxNzMiIHkyPSIzMC44MzgxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkQ3N0IiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkVBRTAxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8wXzEiIHgxPSI0LjUwMTczIiB5MT0iMi45Nzc0MiIgeDI9IjQuNTAxNzMiIHkyPSIzMC44MzgxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkU1QkMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZEMjg5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";

const VISUAL_STYLE = {
  // 选框颜色
  optionFillColor: {
    r: 0.985,
    g: 0.985,
    b: 0.965
  },

  optionStrokeColor: {
    r: 0.965,
    g: 0.635,
    b: 0.455
  },

  contentTextColor: {
    r: 0.62,
    g: 0.34,
    b: 0.18
  },

  // 外圈浅色底盘
  badgeOuterFillColor: {
    r: 0.985,
    g: 0.985,
    b: 0.965
  },

  // 黄色渐变：中心更亮，边缘更深一点
  badgeGradientStops: [
  {
    position: 0,
    color: {
      r: 1.0,
      g: 0.68,
      b: 0.25,
      a: 1
    }
  },
  {
    position: 1,
    color: {
      r: 0.96,
      g: 0.80,
      b: 0.48,
      a: 1
    }
  }
],

  badgeTextColor: {
    r: 1,
    g: 1,
    b: 1
  },

  minCornerRadius: 10,
  maxCornerRadius: 18,

  minStrokeWeight: 2,
  maxStrokeWeight: 5,

  minBadgeSize: 28,
  maxBadgeSize: 48,

  minBadgeTextSize: 18,
  maxBadgeTextSize: 34,

  minTextPaddingX: 10,
  maxTextPaddingX: 22,

  minTextPaddingY: 8,
  maxTextPaddingY: 18,

  lineHeightPercent: 112
};

function clampVisual(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getOptionVisualStyle(optionWidth, optionHeight) {
  const shortSide = Math.min(optionWidth, optionHeight);

  const cornerRadius = Math.round(
    clampVisual(shortSide * 0.16, VISUAL_STYLE.minCornerRadius, VISUAL_STYLE.maxCornerRadius)
  );

  const strokeWeight = Math.round(
    clampVisual(shortSide * 0.04, VISUAL_STYLE.minStrokeWeight, VISUAL_STYLE.maxStrokeWeight)
  );

  const badgeSize = Math.round(
  clampVisual(shortSide * 0.46, VISUAL_STYLE.minBadgeSize, VISUAL_STYLE.maxBadgeSize)
);

  const badgeTextSize = Math.round(
    clampVisual(badgeSize * 0.56, VISUAL_STYLE.minBadgeTextSize, VISUAL_STYLE.maxBadgeTextSize)
  );

  const textPaddingX = Math.round(
    clampVisual(optionWidth * 0.09, VISUAL_STYLE.minTextPaddingX, VISUAL_STYLE.maxTextPaddingX)
  );

  const textPaddingY = Math.round(
    clampVisual(optionHeight * 0.12, VISUAL_STYLE.minTextPaddingY, VISUAL_STYLE.maxTextPaddingY)
  );

  return {
    cornerRadius,
    strokeWeight,
    badgeSize,
    badgeTextSize,
    badgeX: -2,
    badgeY: -Math.round(badgeSize * 0.16),
    textPaddingX,
    textPaddingY
  };
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === "export-morton-option-layers") {
    await handleExportMortonOptionLayers();
    return;
  }

  if (msg.type === "register-morton-materials") {
    await handleRegisterMortonMaterials(msg);
    return;
  }

  if (msg.type === "create-morton-folder") {
    await handleCreateMortonFolder(msg);
    return;
  }

  if (msg.type !== "generate-options") return;

  try {
    const csvRows = parseCSV(msg.csvText);
    const imageRows = msg.imageRows || [];

    if (csvRows.length === 0 && imageRows.length === 0) {
      figma.notify("没有读取到 CSV 或图片数据。");
      return;
    }

let baseRows = [];

// 如果上传了图片，则优先按图片组数生成
// 这样 CSV 预览框里的默认内容不会干扰图片批量导入
if (imageRows.length > 0) {
  if (csvRows.length === imageRows.length) {
    baseRows = csvRows;
  } else {
    baseRows = imageRows.map(() => {
      return {
        A: "",
        B: "",
        C: "",
        D: ""
      };
    });
  }
} else if (csvRows.length > 0) {
  baseRows = csvRows;
}

    if (msg.limitRows === 1) {
      baseRows = baseRows.slice(0, 1);
    }

    const settings = {
      columns: msg.columns || 4,
      optionWidthMode: msg.optionWidthMode === "manual" ? "manual" : "auto",
      optionWidth: Math.max(80, Number(msg.optionWidth) || 320),
      optionHeight: Math.max(
        40,
        Number(msg.optionHeight) || 56
      ),
      gapX: msg.gapX || 28,
      gapY: msg.gapY || 24,
      fontSize: Math.max(
        12,
        Math.min(64, Number(msg.fontSize) || STANDARD_TEXT_FONT_SIZE)
      ),
      parenthesisBlankSize: Math.max(
        1,
        Math.min(10, Number(msg.parenthesisBlankSize) || 3)
      ),
      groupGap: msg.groupGap || 56,
      fontFamily: msg.fontFamily || "FZCuYuan-M03S",
      badgeStyle: ["vertical", "circle", "none", "content"].includes(
        msg.badgeStyle
      )
        ? msg.badgeStyle
        : "vertical",
      questionBackground:
        msg.questionBackground === "with" ? "with" : "none",
      namePrefix: msg.namePrefix || ""
    };

    const fonts = await getUsableFonts(settings.fontFamily);
    const start = getStartPosition();

    const allContainer = figma.createFrame();
    allContainer.name = "generated-option-groups";
    allContainer.x = start.x;
    allContainer.y = start.y;
    allContainer.fills = [];
    allContainer.clipsContent = false;

    let currentY = 0;
let maxGroupWidth = 0;
let generatedCount = 0;
let generatedSupplementalCount = 0;

for (let i = 0; i < baseRows.length; i++) {
  const rowData = baseRows[i];
  const imagesForThisRow = imageRows[i] || {};

  const optionGroup = await createOptionGroup({
    rowData,
    index: i + 1,
    settings,
    fonts,
    imagesForThisRow
  });

  const rowNamePrefix = getRowNamePrefix(rowData, imagesForThisRow, settings);
  const questionText = String(rowData.QUESTION || "").trim();
  const fallbackQuestionWidth =
    settings.columns * settings.optionWidth +
    Math.max(0, settings.columns - 1) * settings.gapX;
  const questionWidth = Math.max(
    settings.optionWidth,
    fallbackQuestionWidth,
    optionGroup ? optionGroup.width : 0
  );
  const questionFrame = questionText
    ? createQuestionFrame({
        value: questionText,
        width: questionWidth,
        settings,
        fonts,
        namePrefix: rowNamePrefix
      })
    : null;

  const supplementalFrames = createSupplementalFrames({
    rowData,
    width: questionWidth,
    settings,
    fonts,
    namePrefix: rowNamePrefix
  });

  if (!optionGroup && !questionFrame && supplementalFrames.length === 0) {
    continue;
  }

  const itemGroup = figma.createFrame();
  itemGroup.name = withNamePrefix(rowNamePrefix, "QuestionGroup");
  itemGroup.fills = [];
  itemGroup.clipsContent = false;

  let itemY = 0;
  let itemWidth = 1;

  if (questionFrame) {
    questionFrame.x = 0;
    questionFrame.y = itemY;
    itemGroup.appendChild(questionFrame);
    itemY += questionFrame.height;
    itemWidth = Math.max(itemWidth, questionFrame.width);
  }

  if (optionGroup) {
    if (questionFrame) {
      itemY += 18;
    }
    optionGroup.x = questionFrame
      ? Math.max(0, (questionWidth - optionGroup.width) / 2)
      : 0;
    optionGroup.y = itemY;
    itemGroup.appendChild(optionGroup);
    itemY += optionGroup.height;
    itemWidth = Math.max(itemWidth, optionGroup.width);
  }

  const supplementalRows = groupSupplementalFramesByKind(supplementalFrames);

  for (const supplementalRow of supplementalRows) {
    if (itemY > 0) {
      itemY += 14;
    }

    let rowX = 0;
    let rowHeight = 0;

    for (const supplementalFrame of supplementalRow) {
      supplementalFrame.x = rowX;
      supplementalFrame.y = itemY;
      itemGroup.appendChild(supplementalFrame);
      rowX += supplementalFrame.width + 24;
      rowHeight = Math.max(rowHeight, supplementalFrame.height);
      generatedSupplementalCount += 1;
    }

    itemY += rowHeight;
    itemWidth = Math.max(itemWidth, Math.max(1, rowX - 24));
  }

  itemGroup.resize(itemWidth, Math.max(1, itemY));
  itemGroup.x = 0;
  itemGroup.y = currentY;
  allContainer.appendChild(itemGroup);

  currentY += itemGroup.height + settings.groupGap;
  maxGroupWidth = Math.max(maxGroupWidth, itemGroup.width);
  generatedCount += 1;
}

if (generatedCount === 0) {
  figma.notify("没有识别到有效选项。请检查 CSV / Word / 图片命名。");
  return;
}

allContainer.resize(
  maxGroupWidth,
  Math.max(1, currentY - settings.groupGap)
);

figma.currentPage.appendChild(allContainer);
figma.viewport.scrollAndZoomIntoView([allContainer]);

figma.notify(
  `已生成 ${generatedCount} 道题的题干/选项图层，并生成 ${generatedSupplementalCount} 张小灯泡/负反馈图。`
);
  } catch (error) {
    console.error(error);
    figma.notify("生成失败，请查看控制台报错。");
  }
};

function getStartPosition() {
  const selection = figma.currentPage.selection;

  if (selection.length > 0) {
    const selected = selection[0];

    return {
      x: selected.x + selected.width + 80,
      y: selected.y
    };
  }

  return {
    x: figma.viewport.center.x,
    y: figma.viewport.center.y
  };
}

async function getUsableFonts(preferredFamily) {
  const availableFonts = await figma.listAvailableFontsAsync();

  if (!availableFonts.length) {
    throw new Error("Figma 当前没有可用字体。");
  }

  function findFont(families, preferredStyles) {
    const styles = preferredStyles && preferredStyles.length
      ? preferredStyles
      : ["Regular"];

    for (const family of families.filter(Boolean)) {
      for (const style of styles) {
        const matched = availableFonts.find(font => {
          return (
            font.fontName.family.toLowerCase() === family.toLowerCase() &&
            font.fontName.style.toLowerCase() === style.toLowerCase()
          );
        });

        if (matched) return matched.fontName;
      }

      if (!preferredStyles || !preferredStyles.length) {
        const familyMatch = availableFonts.find(font => {
          return font.fontName.family.toLowerCase() === family.toLowerCase();
        });

        if (familyMatch) return familyMatch.fontName;
      }
    }

    return null;
  }

  const content =
    findFont([
      preferredFamily,
      "方正粗圆简体",
      "FZCuYuan-M03S",
      "Microsoft YaHei",
      "Noto Sans CJK SC",
      "Noto Sans SC",
      "PingFang SC"
    ]) || availableFonts[0].fontName;

  const latin = findFont(["Times New Roman"]) || content;
  const latinItalic =
    findFont(["Times New Roman"], ["Italic"]) || latin;
  const symbol = findFont(["SimSun", "宋体"]) || content;
  const operator =
    findFont([
      "Cambria Math",
      "STIX Two Math",
      "Times New Roman",
      "SimSun",
      "宋体"
    ]) || symbol;

  await Promise.all(
    [content, latin, latinItalic, symbol, operator]
      .filter((font, index, fonts) => {
        return (
          fonts.findIndex(item => {
            return item.family === font.family && item.style === font.style;
          }) === index
        );
      })
      .map(font => figma.loadFontAsync(font))
  );

  const missing = [];
  if (latin === content && content.family.toLowerCase() !== "times new roman") {
    missing.push("Times New Roman");
  }
  if (latinItalic === latin && latin.style.toLowerCase() !== "italic") {
    missing.push("Times New Roman Italic");
  }
  if (
    symbol === content &&
    !["simsun", "宋体"].includes(content.family.toLowerCase())
  ) {
    missing.push("宋体/SimSun");
  }

  if (missing.length) {
    figma.notify(`未找到 ${missing.join("、")}，已暂用 ${content.family}。`);
  }

  return {
    content,
    latin,
    latinItalic,
    symbol,
    operator
  };
}

function getVisibleOptionKeys(rowData, imagesForThisRow) {
  const allKeys = ["A", "B", "C", "D"];

  return allKeys.filter(key => {
    const textValue = rowData && rowData[key] !== undefined && rowData[key] !== null
      ? String(rowData[key]).trim()
      : "";

    const imageValue = imagesForThisRow && imagesForThisRow[key];
    const hasImage = Boolean(imageValue && imageValue.length > 0);

    return textValue !== "" || hasImage;
  });
}

function isFillChoiceQuestion(rowData) {
  const value = [
    rowData && rowData.QUESTIONTYPE,
    rowData && rowData.TYPE,
    rowData && rowData["题型"],
    rowData && rowData.QUESTION
  ]
    .filter(Boolean)
    .join(" ");

  return /【?\s*填空\s*选择\s*】?/.test(value);
}

async function createOptionGroup({ rowData, index, settings, fonts, imagesForThisRow }) {
  const keys = getVisibleOptionKeys(rowData, imagesForThisRow);

  // 这一行如果没有 A/B/C/D 中的任何有效文本或图片，就不生成空框
  if (keys.length === 0) {
    return null;
  }

  const optionSettings = isFillChoiceQuestion(rowData)
    ? {
        ...settings,
        badgeStyle: "content"
      }
    : settings;
  const rowNamePrefix = getRowNamePrefix(rowData, imagesForThisRow, settings);
  const rowLayout = analyzeOptionGroupLayout({
    rowData,
    settings: optionSettings,
    fonts,
    keys,
    imagesForThisRow
  });

  const optionGroup = figma.createFrame();
  optionGroup.name = withNamePrefix(rowNamePrefix, "OptionGroup");
  optionGroup.fills = [];
  optionGroup.clipsContent = false;

  const columns = Math.min(settings.columns, keys.length);
  const rowHeights = [];
  const rowWidths = [];
  const itemXOffsets = [];

  for (let i = 0; i < keys.length; i++) {
    const row = Math.floor(i / columns);
    const optionLayout = rowLayout.options[keys[i]];
    const frameWidth =
      optionLayout.frameWidth || rowLayout.optionWidth;
    const frameHeight =
      optionLayout.frameHeight || rowLayout.optionHeight;
    const currentRowWidth = rowWidths[row] || 0;

    itemXOffsets[i] =
      currentRowWidth > 0
        ? currentRowWidth + settings.gapX
        : 0;
    rowWidths[row] =
      itemXOffsets[i] + frameWidth;
    rowHeights[row] = Math.max(
      rowHeights[row] || 0,
      frameHeight
    );
  }

  const groupWidth = Math.max(...rowWidths);

  const rowOffsets = [];
  let groupHeight = 0;

  for (let row = 0; row < rowHeights.length; row++) {
    rowOffsets[row] = groupHeight;
    groupHeight += rowHeights[row];

    if (row < rowHeights.length - 1) {
      groupHeight += settings.gapY;
    }
  }

  optionGroup.resize(groupWidth, groupHeight);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = rowData[key] || "";
    const imageBytes = imagesForThisRow[key];

    const optionFrame = await createSingleOption({
      key,
      value,
      settings: optionSettings,
      rowLayout,
      optionLayout: rowLayout.options[key],
      fonts,
      imageBytes,
      namePrefix: rowNamePrefix
    });

    const row = Math.floor(i / columns);

    optionFrame.x = itemXOffsets[i];
    optionFrame.y = rowOffsets[row];

    optionGroup.appendChild(optionFrame);
  }

  return optionGroup;
}

function getVerticalBadgeWidth(optionHeight) {
  return 34;
}

function createVerticalOptionBadge({
  optionFrame,
  key,
  optionHeight,
  visual,
  fonts,
  namePrefix
}) {
  const stripWidth = getVerticalBadgeWidth(optionHeight);
  const strip = figma.createRectangle();
  strip.name = withNamePrefix(namePrefix, `Label_Vertical_${key}`);
  strip.resize(stripWidth, optionHeight);
  strip.x = 0;
  strip.y = 0;
  strip.topLeftRadius = visual.cornerRadius;
  strip.topRightRadius = 0;
  strip.bottomRightRadius = 0;
  strip.bottomLeftRadius = visual.cornerRadius;
  strip.fills = [
    {
      type: "GRADIENT_LINEAR",
      gradientStops: VISUAL_STYLE.badgeGradientStops,
      gradientTransform: [
        [0, 1, 0],
        [-1, 0, 1]
      ]
    }
  ];
  strip.strokes = [];

  const divider = figma.createRectangle();
  divider.name = withNamePrefix(namePrefix, `Label_Divider_${key}`);
  divider.resize(2, optionHeight);
  divider.x = stripWidth - 2;
  divider.y = 0;
  divider.fills = [
    {
      type: "SOLID",
      color: VISUAL_STYLE.optionStrokeColor
    }
  ];
  divider.opacity = 0.5;

  const labelText = figma.createText();
  labelText.name = withNamePrefix(namePrefix, `Label_${key}`);
  labelText.fontName = fonts.latin;
  labelText.characters = key;
  labelText.fontSize = Math.min(
    visual.badgeTextSize,
    Math.max(18, Math.round(stripWidth * 0.58))
  );
  labelText.textAlignHorizontal = "CENTER";
  labelText.textAlignVertical = "CENTER";
  labelText.fills = [
    {
      type: "SOLID",
      color: VISUAL_STYLE.badgeTextColor
    }
  ];
  labelText.resize(stripWidth, optionHeight);
  labelText.x = 0;
  labelText.y = 0;

  optionFrame.appendChild(strip);
  optionFrame.appendChild(divider);
  optionFrame.appendChild(labelText);
}

async function createSingleOption({ key, value, settings, rowLayout, optionLayout, fonts, imageBytes, namePrefix }) {
  const optionWidth =
    optionLayout.frameWidth || rowLayout.optionWidth;
  const optionHeight = optionLayout.frameHeight;
  const visual = getOptionVisualStyle(optionWidth, optionHeight);
  const optionFrame = figma.createFrame();
  const contentOnly = settings.badgeStyle === "content";

  optionFrame.name = withNamePrefix(namePrefix, `Option_${key}`);
  optionFrame.resize(optionWidth, optionHeight);
  optionFrame.cornerRadius = contentOnly ? 0 : visual.cornerRadius;
  optionFrame.clipsContent = false;

optionFrame.fills = [
  {
    type: "SOLID",
    color: VISUAL_STYLE.optionFillColor
  }
];

optionFrame.strokes = contentOnly
  ? []
  : [{
      type: "SOLID",
      color: VISUAL_STYLE.optionStrokeColor
    }];

optionFrame.strokeWeight = contentOnly ? 0 : 2;

if (settings.badgeStyle === "vertical") {
  createVerticalOptionBadge({
    optionFrame,
    key,
    optionHeight,
    visual,
    fonts,
    namePrefix
  });
} else if (settings.badgeStyle === "circle") {
const outerBadgeSize = Math.round(visual.badgeSize * 1.17);

// 三个图层统一使用同一个圆心
const badgeCenterX = visual.badgeX + visual.badgeSize / 2;
const badgeCenterY = visual.badgeY + visual.badgeSize / 2;

// 外圈浅色底盘
const badgeOuter = figma.createEllipse();
badgeOuter.name = withNamePrefix(namePrefix, `Label_Outer_${key}`);
badgeOuter.resize(outerBadgeSize, outerBadgeSize);
badgeOuter.x = badgeCenterX - outerBadgeSize / 2;
badgeOuter.y = badgeCenterY - outerBadgeSize / 2;

badgeOuter.fills = [
  {
    type: "SOLID",
    color: VISUAL_STYLE.badgeOuterFillColor
  }
];

badgeOuter.strokes = [];
badgeOuter.effects = [
  {
    type: "DROP_SHADOW",
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0.08
    },
    offset: {
      x: 0,
      y: 3
    },
    radius: 10,
    spread: 0,
    visible: true,
    blendMode: "NORMAL"
  }
];

// 内层黄色渐变圆
const badge = figma.createEllipse();
badge.name = withNamePrefix(namePrefix, `Label_Badge_${key}`);
badge.resize(visual.badgeSize, visual.badgeSize);
badge.x = badgeCenterX - visual.badgeSize / 2;
badge.y = badgeCenterY - visual.badgeSize / 2;

badge.fills = [
  {
    type: "GRADIENT_RADIAL",
    gradientStops: VISUAL_STYLE.badgeGradientStops,
    gradientTransform: [
      [0.5, 0, 0.25],
      [0, 0.5, 0.25]
    ]
  }
];

badge.strokes = [];
badge.effects = [
  {
    type: "DROP_SHADOW",
    color: {
      r: 0.82,
      g: 0.56,
      b: 0.22,
      a: 0.18
    },
    offset: {
      x: 0,
      y: 4
    },
    radius: 8,
    spread: 0,
    visible: true,
    blendMode: "NORMAL"
  }
];

// 白色字母
const badgeText = figma.createText();
badgeText.name = withNamePrefix(namePrefix, `Label_${key}`);
badgeText.fontName = fonts.latin;
badgeText.characters = key;
badgeText.fontSize = visual.badgeTextSize;
badgeText.textAlignHorizontal = "CENTER";
badgeText.textAlignVertical = "CENTER";

badgeText.fills = [
  {
    type: "SOLID",
    color: VISUAL_STYLE.badgeTextColor
  }
];

badgeText.resize(visual.badgeSize, visual.badgeSize);
badgeText.x = badgeCenterX - visual.badgeSize / 2;
badgeText.y = badgeCenterY - visual.badgeSize / 2;

// 让字母也稍微柔和一点，更接近参考图
badgeText.effects = [
  {
    type: "DROP_SHADOW",
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0.08
    },
    offset: {
      x: 0,
      y: 2
    },
    radius: 3,
    spread: 0,
    visible: true,
    blendMode: "NORMAL"
  }
];

optionFrame.appendChild(badgeOuter);
optionFrame.appendChild(badge);
optionFrame.appendChild(badgeText);
}

  if (imageBytes && imageBytes.length > 0) {
    const image = figma.createImage(new Uint8Array(imageBytes));

    const imageRect = figma.createRectangle();
    imageRect.name = withNamePrefix(namePrefix, `Image_${key}`);

    const contentBounds = getOptionTextContentBounds(
      optionWidth,
      optionHeight,
      settings.badgeStyle
    );
    const imageWidth = contentBounds.width;
    const imageHeight = contentBounds.height;

    imageRect.resize(imageWidth, imageHeight);
    imageRect.x = contentBounds.x;
    imageRect.y = contentBounds.y;
    imageRect.cornerRadius = 10;

    imageRect.fills = [
      {
        type: "IMAGE",
        scaleMode: "FIT",
        imageHash: image.hash
      }
    ];

    optionFrame.appendChild(imageRect);
  } else {
    const contentBounds = getOptionTextContentBounds(
      optionWidth,
      optionHeight,
      settings.badgeStyle
    );
    const maxTextWidth = contentBounds.width;
    const maxTextHeight = contentBounds.height;

    const textBox = figma.createFrame();
    textBox.name = withNamePrefix(namePrefix, `Text_Box_${key}`);
    textBox.resize(maxTextWidth, maxTextHeight);
    textBox.x = contentBounds.x;
    textBox.y = contentBounds.y;
    textBox.fills = [];
    textBox.strokes = [];
    // 文本尺寸按最终测量结果反推选项高度；禁止静默裁切。
    textBox.clipsContent = false;

    let contentNode;
    const textAlignment =
      optionLayout.lineCount > 1 ? "LEFT" : "CENTER";

    if (optionLayout.rich) {
      contentNode = createRichTextBlock({
        value: optionLayout.text,
        maxWidth: maxTextWidth,
        fontSize: optionLayout.fontSize,
        fonts,
        align: textAlignment,
        namePrefix: withNamePrefix(namePrefix, `Text_${key}`)
      });
    } else {
      const optionText = figma.createText();
      optionText.name = withNamePrefix(namePrefix, `Text_${key}`);
      optionText.fontName = fonts.content;
      optionText.fontSize = optionLayout.fontSize;
      optionText.characters = optionLayout.text;
      applyCharacterFonts(optionText, optionLayout.text, fonts);
      optionText.textAutoResize = "WIDTH_AND_HEIGHT";
      optionText.textAlignHorizontal = textAlignment;
      optionText.textAlignVertical = "CENTER";
      optionText.lineHeight = {
        unit: "PERCENT",
        value: VISUAL_STYLE.lineHeightPercent
      };
      optionText.fills = [
        {
          type: "SOLID",
          color: VISUAL_STYLE.contentTextColor
        }
      ];
      contentNode = optionText;
    }

    contentNode.x =
      textAlignment === "CENTER"
        ? Math.max(0, (maxTextWidth - contentNode.width) / 2)
        : 0;
    contentNode.y = Math.max(0, (maxTextHeight - contentNode.height) / 2);

    textBox.appendChild(contentNode);
    optionFrame.appendChild(textBox);
  }

  return optionFrame;
}

function getFractionMatches(value) {
  const text = String(value || "");
  const pattern = /\d+(?:\.\d+)?\s*[\/∕]\s*\d+(?:\.\d+)?/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    const before = match.index > 0 ? text[match.index - 1] : "";
    const afterIndex = match.index + match[0].length;
    const after = afterIndex < text.length ? text[afterIndex] : "";

    if (
      before === "/" ||
      before === "∕" ||
      after === "/" ||
      after === "∕" ||
      /\d/.test(after)
    ) {
      continue;
    }

    const parts = match[0].split(/[\/∕]/);
    matches.push({
      start: match.index,
      end: afterIndex,
      numerator: parts[0].trim(),
      denominator: parts[1].trim()
    });
  }

  return matches;
}

function normalizeFractionSpacing(value) {
  const text = String(value || "");
  const matches = getFractionMatches(text);

  if (!matches.length) return text;

  const result = [];
  let cursor = 0;

  for (const fraction of matches) {
    const before = fraction.start > 0 ? text[fraction.start - 1] : "";
    const after =
      fraction.end < text.length ? text[fraction.end] : "";

    result.push(text.slice(cursor, fraction.start));

    if (before && !/\s/.test(before)) {
      result.push("\u202f");
    }

    result.push(text.slice(fraction.start, fraction.end));

    if (after && !/\s/.test(after)) {
      result.push("\u202f");
    }

    cursor = fraction.end;
  }

  result.push(text.slice(cursor));
  return result.join("");
}

function normalizeEmptyParenthesesSpacing(value, blankSize) {
  const count = Math.max(
    1,
    Math.min(10, Number(blankSize) || 3)
  );
  const blank = "\u3000".repeat(count);

  return String(value || "").replace(
    /（[\s\u3000]*）|\([\s\u3000]*\)/g,
    match => {
      const opening = match[0];
      const closing = match[match.length - 1];
      return `${opening}${blank}${closing}`;
    }
  );
}

function normalizeDecimalPointSpacing(value) {
  return String(value || "").replace(
    /([0-9０-９])\s*[.．]\s*(?=[0-9０-９])/g,
    "$1."
  );
}

function normalizeGeometryPrime(value) {
  return String(value || "").replace(
    /([A-Z])([\ue110\ue111]*)['’](?![A-Za-z])/g,
    "$1$2′"
  );
}

function normalizeMathCommandSyntax(value) {
  const commands = [
    "underbrace",
    "boldbracket",
    "overline",
    "overdot",
    "vertical",
    "bracket",
    "paren",
    "brace",
    "cases",
    "frac",
    "dot",
    "abs",
    "det"
  ].join("|");
  const pattern = new RegExp(
    `[\\\\＼￥¥]+\\s*(${commands})\\s*\\{`,
    "gi"
  );

  return String(value || "").replace(
    pattern,
    (match, command) => `\\${command.toLowerCase()}{`
  );
}

function normalizeMathSuffixSpacing(value) {
  return String(value || "")
    .replace(/％/g, "%")
    .replace(/([0-9０-９])\s+(?=[°′″%％‰])/g, "$1")
    .replace(/([°′″])\s+(?=[0-9０-９])/g, "$1");
}

function normalizeMathParentheses(value) {
  const text = String(value || "");
  const mathContent =
    /[A-Za-z0-9０-９\u0391-\u03c9+\-－−×÷∕=＝≠≈<>＜＞≤≥≦≧∠△⊙√∑∏∫∮]/;

  return text.replace(
    /[（(]([^（）()\n]*)[）)]/g,
    (match, inner) => mathContent.test(inner)
      ? `(${inner})`
      : match
  );
}

function normalizeDisplayMathText(value, parenthesisBlankSize) {
  return normalizeFractionSpacing(
    normalizeEmptyParenthesesSpacing(
      protectInlineMathGroups(
        normalizeBinaryOperatorSpacing(
          normalizeMathSuffixSpacing(
            normalizeGeometryPrime(
              normalizeDecimalPointSpacing(
                normalizeMathParentheses(
                  normalizeMathCommandSyntax(
                    String(value || "").trim()
                  )
                )
              )
            )
          )
        )
      ),
      parenthesisBlankSize
    )
  );
}

function getBalancedBracedValue(text, openingIndex) {
  if (text[openingIndex] !== "{") return null;

  let depth = 0;

  for (let index = openingIndex; index < text.length; index++) {
    if (text[index] === "{") {
      depth += 1;
    } else if (text[index] === "}") {
      depth -= 1;

      if (depth === 0) {
        return {
          value: text.slice(openingIndex + 1, index),
          end: index + 1
        };
      }
    }
  }

  return null;
}

function getCommandMatches(value, command) {
  const text = String(value || "");
  const prefix = `\\${command}{`;
  const matches = [];
  let cursor = 0;

  while (cursor < text.length) {
    const start = text.indexOf(prefix, cursor);

    if (start < 0) break;

    const content = getBalancedBracedValue(
      text,
      start + prefix.length - 1
    );

    if (!content) {
      cursor = start + prefix.length;
      continue;
    }

    matches.push({
      start,
      end: content.end,
      value: content.value
    });
    cursor = content.end;
  }

  return matches;
}

function getExplicitFractionMatches(value) {
  const text = String(value || "");
  const prefix = "\\frac{";
  const matches = [];
  let cursor = 0;

  while (cursor < text.length) {
    const start = text.indexOf(prefix, cursor);

    if (start < 0) break;

    const numerator = getBalancedBracedValue(
      text,
      start + prefix.length - 1
    );

    if (!numerator || text[numerator.end] !== "{") {
      cursor = start + prefix.length;
      continue;
    }

    const denominator = getBalancedBracedValue(text, numerator.end);

    if (!denominator) {
      cursor = numerator.end;
      continue;
    }

    matches.push({
      start,
      end: denominator.end,
      numerator: numerator.value,
      denominator: denominator.value
    });
    cursor = denominator.end;
  }

  return matches;
}

function getUnderbraceMatches(value) {
  const text = String(value || "");
  const prefix = "\\underbrace{";
  const matches = [];
  let cursor = 0;

  while (cursor < text.length) {
    const start = text.indexOf(prefix, cursor);
    if (start < 0) break;

    const body = getBalancedBracedValue(
      text,
      start + prefix.length - 1
    );

    if (
      !body ||
      text.slice(body.end, body.end + 2) !== "_{"
    ) {
      cursor = start + prefix.length;
      continue;
    }

    const label = getBalancedBracedValue(text, body.end + 1);
    if (!label) {
      cursor = body.end;
      continue;
    }

    matches.push({
      start,
      end: label.end,
      body: body.value,
      label: label.value
    });
    cursor = label.end;
  }

  return matches;
}

function getDelimiterMatches(value) {
  const definitions = [
    ["abs", "absolute", "|", "|"],
    ["paren", "parentheses", "(", ")"],
    ["bracket", "brackets", "[", "]"],
    ["brace", "braces", "{", "}"],
    ["boldbracket", "bold-brackets", "【", "】"]
  ];

  return definitions.flatMap(([command, style, left, right]) => {
    return getCommandMatches(value, command).map(item => ({
      ...item,
      style,
      left,
      right,
      body: item.value
    }));
  });
}

function getCasesMatches(value) {
  return getCommandMatches(value, "cases").map(item => ({
    ...item,
    rows: item.value.split(/\\\\|;/).map(row => row.trim()).filter(Boolean)
  }));
}

function getDeterminantMatches(value) {
  return getCommandMatches(value, "det").map(item => ({
    ...item,
    rows: item.value
      .split(";")
      .map(row => row.split(",").map(cell => cell.trim()))
      .filter(row => row.some(Boolean))
  }));
}

function getVerticalCalculationMatches(value) {
  return getCommandMatches(value, "vertical").map(item => ({
    ...item,
    rows: item.value.split(";").map(row => row.trim()).filter(Boolean)
  }));
}

function getPlaceholderMatches(value) {
  const text = String(value || "");
  const characters = Array.from(text);
  const matches = [];
  const hasCircleFillInstruction =
    /(?:在|往)?[○❍]\s*(?:里|中)\s*填/.test(text);

  function findAdjacentContentCharacter(start, direction) {
    let cursor = start + direction;
    while (cursor >= 0 && cursor < characters.length) {
      const candidate = characters[cursor];
      if (
        !/\s/.test(candidate) &&
        !isExplicitItalicControlCharacter(candidate)
      ) {
        return candidate;
      }
      cursor += direction;
    }
    return "";
  }

  for (let index = 0; index < characters.length; index++) {
    const char = characters[index];
    if (!["□", "○", "❍"].includes(char)) continue;

    const previous = findAdjacentContentCharacter(index, -1);
    const next = findAdjacentContentCharacter(index, 1);
    const isInstructionCircle =
      hasCircleFillInstruction && ["○", "❍"].includes(char);
    const usedAsOperator =
      !isInstructionCircle &&
      /[A-Za-z0-9０-９]/.test(previous) &&
      /[A-Za-z0-9０-９]/.test(next);

    if (!usedAsOperator) {
      matches.push({
        start: index,
        end: index + 1,
        shape: char === "□" ? "square" : "circle",
        value: char
      });
    }
  }

  return matches;
}

const SUPERSCRIPT_CHARACTER_MAP = {
  "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4",
  "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
  "⁺": "+", "⁻": "−", "⁼": "=", "⁽": "(", "⁾": ")",
  "ⁿ": "n"
};

function normalizeSuperscriptCharacters(value) {
  return Array.from(String(value || "")).map(char => {
    return SUPERSCRIPT_CHARACTER_MAP[char] || char;
  }).join("");
}

function getScriptMatches(value) {
  const text = String(value || "");
  const matches = [];
  const explicitPattern = /([\^_])\{/g;
  let match;

  while ((match = explicitPattern.exec(text)) !== null) {
    const content = getBalancedBracedValue(
      text,
      match.index + 1
    );

    if (!content) continue;

    matches.push({
      start: match.index,
      end: content.end,
      position: match[1] === "^" ? "superscript" : "subscript",
      value: content.value,
      explicit: true
    });
    explicitPattern.lastIndex = content.end;
  }

  const unicodePattern = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ]+/g;

  while ((match = unicodePattern.exec(text)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      position: "superscript",
      value: normalizeSuperscriptCharacters(match[0]),
      explicit: false
    });
  }

  return matches;
}

function getOverlineMatches(value) {
  return getCommandMatches(value, "overline").map(item => ({
    ...item,
    label: item.value
  }));
}

function getRepeatingDecimalMatches(value) {
  const text = String(value || "");

  function enrich(item, dotMode) {
    const before = text.slice(0, item.start);
    const decimalPrefix = /[0-9０-９]+[.．][0-9０-９]*$/.exec(before);
    const prefix = decimalPrefix ? decimalPrefix[0] : "";
    const prefixLength = Array.from(prefix).length;
    const repeatedLength = Array.from(item.value).length;

    return {
      ...item,
      start: decimalPrefix ? item.start - prefix.length : item.start,
      label: item.value,
      displayText: `${prefix}${item.value}`,
      dotMode,
      dotStart: prefixLength,
      dotEnd: Math.max(prefixLength, prefixLength + repeatedLength - 1)
    };
  }

  return [
    ...getCommandMatches(text, "dot").map(item => {
      return enrich(item, "single");
    }),
    ...getCommandMatches(text, "overdot").map(item => {
      return enrich(item, "ends");
    })
  ];
}

function getPrimedGeometryMatches(value) {
  const text = String(value || "");
  const cleanCharacters = [];
  const originalIndices = [];

  for (let index = 0; index < text.length; index++) {
    if (isExplicitItalicControlCharacter(text[index])) {
      continue;
    }
    cleanCharacters.push(text[index]);
    originalIndices.push(index);
  }

  const cleanText = cleanCharacters.join("");
  const pattern = /(?:[A-Z]′)+/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(cleanText)) !== null) {
    const cleanStart = match.index;
    const cleanEnd = match.index + match[0].length;
    let start = originalIndices[cleanStart];
    let end = originalIndices[cleanEnd - 1] + 1;

    if (
      start > 0 &&
      text[start - 1] === EXPLICIT_ITALIC_START
    ) {
      start -= 1;
    }
    if (
      end < text.length &&
      text[end] === EXPLICIT_ITALIC_END
    ) {
      end += 1;
    }

    matches.push({
      start,
      end,
      value: match[0]
    });
  }

  return matches;
}

function getAreaSubscriptMatches(value) {
  const text = String(value || "");
  const pattern = /S_(?:\{△([A-Z]{3})\}|△([A-Z]{3}))/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      label: match[1] || match[2]
    });
  }

  return matches;
}

function getRootMatches(value) {
  const text = String(value || "");
  const pattern =
    /√(?:\{([^{}\n]+)\}|\(([^()\n]+)\)|([A-Za-z0-9０-９.．\u0391-\u03c9]+))/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      radicand: match[1] || match[2] || match[3]
    });
  }

  return matches;
}

function getArcMatches(value) {
  const text = String(value || "");
  const pattern = /⌒([A-Z]{1,3})/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      label: match[1]
    });
  }

  return matches;
}

function getLargeOperatorMatches(value) {
  const text = String(value || "");
  const pattern = /[∑∏∫∮]/g;
  const matches = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      operator: match[0]
    });
  }

  return matches;
}

function containsStackedFraction(value) {
  return getFractionMatches(value).length > 0;
}

function containsRichMath(value) {
  const text = String(value || "");
  return (
    text.includes(EXPLICIT_ITALIC_START) ||
    text.includes(EXPLICIT_ITALIC_END) ||
    text.includes("∥") ||
    text.includes("□") ||
    containsStackedFraction(value) ||
    getExplicitFractionMatches(value).length > 0 ||
    getUnderbraceMatches(value).length > 0 ||
    getDelimiterMatches(value).length > 0 ||
    getCasesMatches(value).length > 0 ||
    getDeterminantMatches(value).length > 0 ||
    getVerticalCalculationMatches(value).length > 0 ||
    getPlaceholderMatches(value).length > 0 ||
    getScriptMatches(value).length > 0 ||
    getOverlineMatches(value).length > 0 ||
    getRepeatingDecimalMatches(value).length > 0 ||
    getPrimedGeometryMatches(value).length > 0 ||
    getAreaSubscriptMatches(value).length > 0 ||
    getRootMatches(value).length > 0 ||
    getArcMatches(value).length > 0 ||
    getLargeOperatorMatches(value).length > 0
  );
}

function createSingleFontTextNode({
  value,
  fontName,
  fontSize,
  color,
  name
}) {
  const text = figma.createText();
  text.name = name;
  text.fontName = fontName;
  text.fontSize = fontSize;
  text.characters = String(value || "");
  text.textAutoResize = "WIDTH_AND_HEIGHT";
  text.lineHeight = {
    unit: "PERCENT",
    value: VISUAL_STYLE.lineHeightPercent
  };
  text.fills = [
    {
      type: "SOLID",
      color
    }
  ];
  return text;
}

function getInlineSpacerWidth(value, fontSize) {
  const widthEm = Array.from(String(value || "")).reduce(
    (total, char) => {
      if (char === "\u3000") return total + 1;
      if (char === "\u202f") return total + 0.2;
      if (char === "\u00a0") return total + 0.3;
      return total + 0.25;
    },
    0
  );

  return Math.max(1, Math.round(fontSize * widthEm));
}

function createInlineSpacerNode({
  value,
  fontSize,
  name
}) {
  const spacer = figma.createFrame();
  spacer.name = name;
  spacer.fills = [];
  spacer.strokes = [];
  spacer.clipsContent = false;
  spacer.resize(
    getInlineSpacerWidth(value, fontSize),
    Math.ceil(fontSize * VISUAL_STYLE.lineHeightPercent / 100)
  );
  return spacer;
}

function createCompactFormulaContentNode({
  value,
  fontSize,
  fonts,
  namePrefix,
  fallbackName
}) {
  const textValue = String(value || "");

  if (!containsRichMath(textValue)) {
    const textNode = createSingleFontTextNode({
      value: textValue,
      fontName: fonts.content,
      fontSize,
      color: VISUAL_STYLE.contentTextColor,
      name: withNamePrefix(namePrefix, fallbackName)
    });
    applyCharacterFonts(textNode, textValue, fonts);
    return textNode;
  }

  const maxFormulaWidth = Math.max(120, fontSize * 24);
  const block = createRichTextBlock({
    value: textValue,
    maxWidth: maxFormulaWidth,
    fontSize,
    fonts,
    align: "LEFT",
    namePrefix: withNamePrefix(namePrefix, fallbackName)
  });
  let naturalWidth = 1;

  for (const line of block.children) {
    let lineWidth = 0;

    for (const child of line.children) {
      lineWidth = Math.max(lineWidth, child.x + child.width);
    }

    naturalWidth = Math.max(naturalWidth, Math.ceil(lineWidth));
  }

  for (const line of block.children) {
    line.resize(naturalWidth, line.height);
  }

  block.resize(naturalWidth, block.height);
  return block;
}

function layerNameIncludes(node, baseName) {
  return Boolean(
    node &&
    String(node.name || "").includes(normalizeLayerType(baseName))
  );
}

function layerNameEndsWith(node, baseName) {
  return Boolean(
    node &&
    String(node.name || "").endsWith(normalizeLayerType(baseName))
  );
}

function getTextVisualCenterY(node) {
  if (
    !node ||
    node.type !== "TEXT" ||
    !node.characters ||
    typeof node.getRangeBoundingBox !== "function"
  ) {
    return node ? node.height / 2 : 0;
  }

  try {
    const rangeBox = node.getRangeBoundingBox(
      0,
      node.characters.length
    );

    if (rangeBox) {
      return rangeBox.y + rangeBox.height / 2;
    }
  } catch (error) {
    // 字体尚未完成测量时回退到文本节点外框中心。
  }

  return node.height / 2;
}

function getTextVisualBounds(node) {
  if (
    node &&
    node.type === "TEXT" &&
    node.characters &&
    typeof node.getRangeBoundingBox === "function"
  ) {
    try {
      const rangeBox = node.getRangeBoundingBox(
        0,
        node.characters.length
      );
      if (rangeBox) {
        return rangeBox;
      }
    } catch (error) {
      // 字体尚未完成测量时回退到文本节点外框。
    }
  }

  return {
    x: 0,
    y: 0,
    width: node ? node.width : 0,
    height: node ? node.height : 0
  };
}

function getNestedFormulaAlignmentAnchor(node, fallbackFontSize) {
  if (!node) {
    return fallbackFontSize * 0.86;
  }

  if (node.type === "TEXT") {
    const nodeFontSize =
      typeof node.fontSize === "number"
        ? node.fontSize
        : fallbackFontSize;
    return Math.min(node.height, nodeFontSize * 0.86);
  }

  if (layerNameEndsWith(node, "Fraction")) {
    const fractionLine = node.children.find(child => {
      return layerNameEndsWith(child, "FractionLine");
    });
    const mathAxis = fractionLine
      ? fractionLine.y + fractionLine.height / 2
      : node.height / 2;
    return (
      mathAxis +
      fallbackFontSize * FRACTION_AXIS_FROM_BASELINE_RATIO
    );
  }

  if (node.children && node.children.length) {
    const firstLine = node.children.find(child => {
      return layerNameIncludes(child, "RichTextLine_1");
    });
    const container = firstLine || node;
    const baselineChild = container.children.find(child => {
      return !layerNameIncludes(child, "Spacer");
    });

    if (baselineChild) {
      return (
        (firstLine ? firstLine.y : 0) +
        baselineChild.y +
        getNestedFormulaAlignmentAnchor(
          baselineChild,
          fallbackFontSize
        )
      );
    }
  }

  return Math.min(node.height, fallbackFontSize * 0.86);
}

function createFractionInlineNode({
  numerator,
  denominator,
  fontSize,
  fonts,
  namePrefix
}) {
  const fractionFontSize = Math.max(9, Math.round(fontSize * 0.76));
  const numeratorText = createCompactFormulaContentNode({
    value: numerator,
    fontSize: fractionFontSize,
    fonts,
    namePrefix,
    fallbackName: "FractionNumerator"
  });
  const denominatorText = createCompactFormulaContentNode({
    value: denominator,
    fontSize: fractionFontSize,
    fonts,
    namePrefix,
    fallbackName: "FractionDenominator"
  });

  const horizontalPadding = 3;
  const lineGap = 2;
  const lineWeight = Math.max(1, Math.round(fontSize / 14));
  const fractionWidth = Math.ceil(
    Math.max(numeratorText.width, denominatorText.width) +
    horizontalPadding * 2
  );
  const fractionHeight = Math.ceil(
    numeratorText.height +
    lineGap +
    lineWeight +
    lineGap +
    denominatorText.height
  );

  const fractionFrame = figma.createFrame();
  fractionFrame.name = withNamePrefix(namePrefix, "Fraction");
  fractionFrame.fills = [];
  fractionFrame.strokes = [];
  fractionFrame.clipsContent = false;
  fractionFrame.resize(fractionWidth, fractionHeight);

  numeratorText.x = (fractionWidth - numeratorText.width) / 2;
  numeratorText.y = 0;

  const fractionLine = figma.createRectangle();
  fractionLine.name = withNamePrefix(namePrefix, "FractionLine");
  fractionLine.resize(fractionWidth, lineWeight);
  fractionLine.x = 0;
  fractionLine.y = numeratorText.height + lineGap;
  fractionLine.fills = [
    {
      type: "SOLID",
      color: VISUAL_STYLE.contentTextColor
    }
  ];

  denominatorText.x = (fractionWidth - denominatorText.width) / 2;
  denominatorText.y =
    fractionLine.y + lineWeight + lineGap;

  fractionFrame.appendChild(numeratorText);
  fractionFrame.appendChild(fractionLine);
  fractionFrame.appendChild(denominatorText);

  return fractionFrame;
}

function getBottomAlignedOffset(baseHeight, childHeight) {
  return Math.max(0, baseHeight - childHeight);
}

function createAreaSubscriptInlineNode({
  label,
  fontSize,
  fonts,
  namePrefix
}) {
  const baseText = createSingleFontTextNode({
    value: "S",
    fontName: fonts.latinItalic,
    fontSize,
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "AreaSubscriptBase")
  });
  const subscriptFontSize = Math.max(
    8,
    Math.round(fontSize * 0.64)
  );
  const subscriptText = createSingleFontTextNode({
    value: `△${label}`,
    fontName: fonts.symbol,
    fontSize: subscriptFontSize,
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "AreaSubscriptLabel")
  });
  applyCharacterFonts(
    subscriptText,
    `△${label}`,
    fonts
  );

  const subscriptGap = 1;
  const subscriptY = getBottomAlignedOffset(
    baseText.height,
    subscriptText.height
  );
  const frameWidth = Math.ceil(
    baseText.width + subscriptGap + subscriptText.width
  );
  const frameHeight = Math.ceil(
    Math.max(
      baseText.height,
      subscriptY + subscriptText.height
    )
  );
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "AreaSubscript");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(frameWidth, frameHeight);

  baseText.x = 0;
  baseText.y = 0;
  subscriptText.x = baseText.width + subscriptGap;
  subscriptText.y = subscriptY;

  frame.appendChild(baseText);
  frame.appendChild(subscriptText);
  return frame;
}

function createScriptInlineNode({
  value,
  position,
  fontSize,
  fonts,
  namePrefix
}) {
  const scriptFontSize = Math.max(8, Math.round(fontSize * 0.64));
  const scriptText = createCompactFormulaContentNode({
    value,
    fontSize: scriptFontSize,
    fonts,
    namePrefix,
    fallbackName:
      position === "superscript" ? "SuperscriptText" : "SubscriptText"
  });
  const frameHeight = Math.ceil(
    fontSize * VISUAL_STYLE.lineHeightPercent / 100
  );
  const frame = figma.createFrame();
  frame.name = withNamePrefix(
    namePrefix,
    position === "superscript" ? "Superscript" : "Subscript"
  );
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(Math.ceil(scriptText.width + 1), frameHeight);

  scriptText.x = 0;
  scriptText.y = position === "superscript"
    ? 0
    : Math.max(0, frameHeight - scriptText.height);
  frame.appendChild(scriptText);
  return frame;
}

function createParallelInlineNode({
  fontSize,
  fonts,
  namePrefix
}) {
  const node = createSingleFontTextNode({
    value: "//",
    fontName: fonts.operator || fonts.latin,
    fontSize,
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "ParallelSymbol")
  });
  node.letterSpacing = {
    unit: "PIXELS",
    value: -Math.max(1, Math.round(fontSize * 0.08))
  };
  return node;
}

function createOverlineInlineNode({
  label,
  fontSize,
  fonts,
  namePrefix
}) {
  const labelText = /^[A-Za-z]+$/.test(label)
    ? createSingleFontTextNode({
      value: label,
      fontName: fonts.latinItalic,
      fontSize,
      color: VISUAL_STYLE.contentTextColor,
      name: withNamePrefix(namePrefix, "OverlineText")
    })
    : createCompactFormulaContentNode({
      value: label,
      fontSize,
      fonts,
      namePrefix,
      fallbackName: "OverlineText"
    });
  const lineWeight = Math.max(1, Math.round(fontSize / 16));
  const topGap = Math.max(1, Math.round(fontSize * 0.08));
  const frameWidth = Math.ceil(labelText.width);
  const frameHeight = Math.ceil(lineWeight + topGap + labelText.height);
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Overline");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(frameWidth, frameHeight);

  const line = figma.createRectangle();
  line.name = withNamePrefix(namePrefix, "OverlineMark");
  line.resize(Math.max(1, frameWidth), lineWeight);
  line.x = 0;
  line.y = 0;
  line.fills = [{
    type: "SOLID",
    color: VISUAL_STYLE.contentTextColor
  }];

  labelText.x = 0;
  labelText.y = lineWeight + topGap;
  frame.appendChild(line);
  frame.appendChild(labelText);
  return frame;
}

function createRepeatingDecimalInlineNode({
  label,
  displayText,
  dotMode,
  dotStart,
  dotEnd,
  fontSize,
  fonts,
  namePrefix
}) {
  const labelText = createCompactFormulaContentNode({
    value: displayText || label,
    fontSize,
    fonts,
    namePrefix,
    fallbackName: "RepeatingDecimalText"
  });
  const dotSize = Math.max(2, Math.round(fontSize * 0.12));
  const topGap = Math.max(1, Math.round(fontSize * 0.05));
  const frameWidth = Math.ceil(labelText.width);
  // 循环点不参与行高和基线计算。数字保持普通文本高度，
  // 点通过负 Y 坐标悬浮在数字上方。
  const frameHeight = Math.ceil(labelText.height);
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "RepeatingDecimal");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(frameWidth, frameHeight);

  const characters = Array.from(displayText || label);

  function measureCharacters(value) {
    if (!value) return 0;
    const measure = createSingleFontTextNode({
      value,
      fontName: fonts.content,
      fontSize,
      color: VISUAL_STYLE.contentTextColor,
      name: withNamePrefix(namePrefix, "RepeatingDecimalMeasure")
    });
    applyCharacterFonts(measure, value, fonts);
    const width = measure.width;
    measure.remove();
    return width;
  }

  function characterCenter(index) {
    const safeIndex = Math.max(
      0,
      Math.min(characters.length - 1, Number(index) || 0)
    );

    if (typeof labelText.getRangeBoundingBox === "function") {
      const rangeBox = labelText.getRangeBoundingBox(
        safeIndex,
        safeIndex + 1
      );

      if (rangeBox && Number.isFinite(rangeBox.x)) {
        return rangeBox.x + rangeBox.width / 2;
      }
    }

    const beforeWidth = measureCharacters(
      characters.slice(0, safeIndex).join("")
    );
    const throughWidth = measureCharacters(
      characters.slice(0, safeIndex + 1).join("")
    );
    return (beforeWidth + throughWidth) / 2;
  }

  const firstDot = characterCenter(dotStart);
  const lastDot = characterCenter(dotEnd);
  const dotPositions =
    dotMode === "ends" && dotEnd !== dotStart
      ? [firstDot, lastDot]
      : [firstDot];

  for (let index = 0; index < dotPositions.length; index++) {
    const dot = figma.createEllipse();
    dot.name = withNamePrefix(
      namePrefix,
      `RepeatingDot_${index + 1}`
    );
    dot.resize(dotSize, dotSize);
    const firstDotOpticalOffset =
      dotMode === "ends" &&
      dotPositions.length > 1 &&
      index === 0
        ? -1
        : 0;
    dot.x =
      dotPositions[index] -
      dotSize / 2 +
      firstDotOpticalOffset;
    dot.y = -(dotSize + topGap);
    dot.fills = [{
      type: "SOLID",
      color: VISUAL_STYLE.contentTextColor
    }];
    frame.appendChild(dot);
  }

  labelText.x = 0;
  labelText.y = 0;
  frame.appendChild(labelText);
  return frame;
}

function createPrimedGeometryInlineNode({
  value,
  fontSize,
  fonts,
  namePrefix
}) {
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "PrimedGeometry");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;

  const primeFontSize = Math.max(8, Math.round(fontSize * 0.62));
  const primeSideGap = 2;
  const nodes = [];
  let currentX = 0;

  for (let index = 0; index < value.length; index += 2) {
    const letter = value[index];
    const prime = value[index + 1];
    const letterNode = createSingleFontTextNode({
      value: letter,
      fontName: fonts.latinItalic,
      fontSize,
      color: VISUAL_STYLE.contentTextColor,
      name: withNamePrefix(
        namePrefix,
        `PrimedGeometryLetter_${index / 2 + 1}`
      )
    });
    letterNode.x = currentX;
    letterNode.y = 0;
    nodes.push(letterNode);
    const letterRight = letterNode.x + letterNode.width;

    if (prime === "′") {
      const primeNode = createSingleFontTextNode({
        value: prime,
        fontName: fonts.latin,
        fontSize: primeFontSize,
        color: VISUAL_STYLE.contentTextColor,
        name: withNamePrefix(
          namePrefix,
          `PrimedGeometryPrime_${index / 2 + 1}`
        )
      });
      const primeVisualBounds = getTextVisualBounds(primeNode);
      primeNode.x =
        letterRight +
        primeSideGap -
        primeVisualBounds.x;
      primeNode.y = 0;
      nodes.push(primeNode);
      const primeVisualRight =
        primeNode.x +
        primeVisualBounds.x +
        primeVisualBounds.width;
      currentX = primeVisualRight + primeSideGap;
    } else {
      currentX = letterRight;
    }
  }

  const frameWidth = Math.max(
    1,
    ...nodes.map(node => node.x + node.width)
  );
  const frameHeight = Math.max(
    1,
    ...nodes.map(node => node.y + node.height)
  );
  frame.resize(Math.ceil(frameWidth), Math.ceil(frameHeight));

  for (const node of nodes) {
    frame.appendChild(node);
  }
  return frame;
}

function createVerticalRule({
  height,
  weight,
  namePrefix,
  name
}) {
  const rule = figma.createRectangle();
  rule.name = withNamePrefix(namePrefix, name);
  rule.resize(weight, Math.max(1, height));
  rule.fills = [{
    type: "SOLID",
    color: VISUAL_STYLE.contentTextColor
  }];
  return rule;
}

function createDelimiterInlineNode({
  body,
  style,
  left,
  right,
  fontSize,
  fonts,
  namePrefix
}) {
  const bodyNode = createCompactFormulaContentNode({
    value: body,
    fontSize,
    fonts,
    namePrefix,
    fallbackName: "DelimiterBody"
  });
  const padding = Math.max(2, Math.round(fontSize * 0.12));
  const leftInnerOpticalPadding =
    style === "bold-brackets" ? 2 : 0;
  const ruleWeight = Math.max(1, Math.round(fontSize / 15));
  let leftNode;
  let rightNode;

  if (style === "absolute") {
    leftNode = createVerticalRule({
      height: bodyNode.height + 2,
      weight: ruleWeight,
      namePrefix,
      name: "DelimiterLeft"
    });
    rightNode = createVerticalRule({
      height: bodyNode.height + 2,
      weight: ruleWeight,
      namePrefix,
      name: "DelimiterRight"
    });
  } else {
    const delimiterFontSize = Math.max(
      fontSize,
      Math.round(bodyNode.height * 0.9)
    );
    leftNode = createSingleFontTextNode({
      value: left,
      fontName: fonts.operator || fonts.symbol,
      fontSize: delimiterFontSize,
      color: VISUAL_STYLE.contentTextColor,
      name: withNamePrefix(namePrefix, "DelimiterLeft")
    });
    rightNode = createSingleFontTextNode({
      value: right,
      fontName: fonts.operator || fonts.symbol,
      fontSize: delimiterFontSize,
      color: VISUAL_STYLE.contentTextColor,
      name: withNamePrefix(namePrefix, "DelimiterRight")
    });
  }

  const frameHeight = Math.ceil(
    Math.max(bodyNode.height, leftNode.height, rightNode.height)
  );
  const frameWidth = Math.ceil(
    leftNode.width +
    padding +
    leftInnerOpticalPadding +
    bodyNode.width +
    padding +
    rightNode.width
  );
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Delimiter");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(frameWidth, frameHeight);

  leftNode.x = 0;
  leftNode.y = (frameHeight - leftNode.height) / 2;
  bodyNode.x =
    leftNode.width + padding + leftInnerOpticalPadding;
  bodyNode.y = (frameHeight - bodyNode.height) / 2;
  rightNode.x = bodyNode.x + bodyNode.width + padding;
  rightNode.y = (frameHeight - rightNode.height) / 2;

  frame.appendChild(leftNode);
  frame.appendChild(bodyNode);
  frame.appendChild(rightNode);
  return frame;
}

function createPlaceholderInlineNode({
  shape,
  fontSize,
  namePrefix
}) {
  const size = shape === "square"
    ? Math.round(fontSize + SQUARE_PLACEHOLDER_SIZE_OFFSET)
    : Math.max(10, Math.round(fontSize * 0.72));
  const node = shape === "square"
    ? figma.createRectangle()
    : figma.createEllipse();
  node.name = withNamePrefix(namePrefix, "PlaceholderShape");
  node.resize(size, size);
  node.fills = [];
  node.strokes = [{
    type: "SOLID",
    color: VISUAL_STYLE.contentTextColor
  }];
  node.strokeWeight = Math.max(1, Math.round(size / 14));

  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Placeholder");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(size + 2, size + 2);
  node.x = 1;
  node.y = 1;
  frame.appendChild(node);
  return frame;
}

function createUnderbraceInlineNode({
  body,
  label,
  fontSize,
  fonts,
  namePrefix
}) {
  const bodyNode = createCompactFormulaContentNode({
    value: body,
    fontSize,
    fonts,
    namePrefix,
    fallbackName: "UnderbraceBody"
  });
  const labelNode = createCompactFormulaContentNode({
    value: label,
    fontSize: Math.max(8, Math.round(fontSize * 0.62)),
    fonts,
    namePrefix,
    fallbackName: "UnderbraceLabel"
  });
  const braceWidth = Math.max(bodyNode.width, labelNode.width, fontSize * 1.2);
  const braceHeight = Math.max(
    7,
    Math.round(Math.min(fontSize * 0.42, braceWidth * 0.105))
  );
  const gap = Math.max(1, Math.round(fontSize * 0.08));
  const frameHeight = Math.ceil(
    bodyNode.height + gap + braceHeight + gap + labelNode.height
  );
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Underbrace");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(Math.ceil(braceWidth), frameHeight);

  bodyNode.x = (braceWidth - bodyNode.width) / 2;
  bodyNode.y = 0;
  frame.appendChild(bodyNode);

  const vector = figma.createVector();
  vector.name = withNamePrefix(namePrefix, "UnderbraceMark");
  vector.resize(braceWidth, braceHeight);
  vector.fills = [];
  vector.strokes = [{
    type: "SOLID",
    color: VISUAL_STYLE.contentTextColor
  }];
  vector.strokeWeight = Math.max(1, Math.round(fontSize / 18));
  vector.strokeCap = "ROUND";
  vector.strokeJoin = "ROUND";
  const width = Math.max(1, braceWidth);
  const height = Math.max(1, braceHeight);
  const shoulderY = height * 0.405;
  const capWidth = Math.min(width * 0.075, height * 0.74);
  const cuspHalfWidth = Math.min(width * 0.065, height * 0.62);
  const centerX = width / 2;
  const leftCuspX = centerX - cuspHalfWidth;
  const rightCuspX = centerX + cuspHalfWidth;
  vector.vectorPaths = [{
    windingRule: "NONZERO",
    data:
      `M 0 0 ` +
      `C 0 ${shoulderY * 0.6} ${capWidth * 0.35} ${shoulderY} ${capWidth} ${shoulderY} ` +
      `L ${leftCuspX} ${shoulderY} ` +
      `C ${centerX - cuspHalfWidth * 0.46} ${shoulderY} ${centerX - cuspHalfWidth * 0.04} ${height * 0.52} ${centerX} ${height} ` +
      `C ${centerX + cuspHalfWidth * 0.04} ${height * 0.52} ${centerX + cuspHalfWidth * 0.46} ${shoulderY} ${rightCuspX} ${shoulderY} ` +
      `L ${width - capWidth} ${shoulderY} ` +
      `C ${width - capWidth * 0.35} ${shoulderY} ${width} ${shoulderY * 0.6} ${width} 0`
  }];
  vector.x = 0;
  vector.y = bodyNode.height + gap;
  frame.appendChild(vector);

  labelNode.x = (braceWidth - labelNode.width) / 2;
  labelNode.y = vector.y + braceHeight + gap;
  frame.appendChild(labelNode);
  return frame;
}

function createCasesInlineNode({
  rows,
  fontSize,
  fonts,
  namePrefix
}) {
  const rowGap = Math.max(2, Math.round(fontSize * 0.18));
  const rowNodes = rows.map((row, index) => {
    return createCompactFormulaContentNode({
      value: row,
      fontSize,
      fonts,
      namePrefix,
      fallbackName: `CasesRow_${index + 1}`
    });
  });
  const rowsWidth = Math.max(1, ...rowNodes.map(node => node.width));
  const rowsHeight = rowNodes.reduce((sum, node) => sum + node.height, 0) +
    rowGap * Math.max(0, rowNodes.length - 1);
  const brace = createSingleFontTextNode({
    value: "{",
    fontName: fonts.operator || fonts.symbol,
    fontSize: Math.max(fontSize, Math.round(rowsHeight * 0.78)),
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "CasesBrace")
  });
  const gap = Math.max(3, Math.round(fontSize * 0.18));
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Cases");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(
    Math.ceil(brace.width + gap + rowsWidth),
    Math.ceil(Math.max(rowsHeight, brace.height))
  );
  brace.x = 0;
  brace.y = (frame.height - brace.height) / 2;
  frame.appendChild(brace);

  let currentY = (frame.height - rowsHeight) / 2;
  for (const rowNode of rowNodes) {
    rowNode.x = brace.width + gap;
    rowNode.y = currentY;
    frame.appendChild(rowNode);
    currentY += rowNode.height + rowGap;
  }
  return frame;
}

function createDeterminantInlineNode({
  rows,
  fontSize,
  fonts,
  namePrefix
}) {
  const safeRows = rows.length ? rows : [[""]];
  const columnCount = Math.max(1, ...safeRows.map(row => row.length));
  const nodes = safeRows.map((row, rowIndex) => {
    return Array.from({ length: columnCount }, (_, columnIndex) => {
      return createCompactFormulaContentNode({
        value: row[columnIndex] || "",
        fontSize: Math.max(9, Math.round(fontSize * 0.9)),
        fonts,
        namePrefix,
        fallbackName: `Determinant_${rowIndex + 1}_${columnIndex + 1}`
      });
    });
  });
  const columnGap = Math.max(5, Math.round(fontSize * 0.35));
  const rowGap = Math.max(3, Math.round(fontSize * 0.22));
  const columnWidths = Array.from({ length: columnCount }, (_, columnIndex) => {
    return Math.max(...nodes.map(row => row[columnIndex].width));
  });
  const rowHeights = nodes.map(row => Math.max(...row.map(node => node.height)));
  const contentWidth = columnWidths.reduce((sum, width) => sum + width, 0) +
    columnGap * Math.max(0, columnCount - 1);
  const contentHeight = rowHeights.reduce((sum, height) => sum + height, 0) +
    rowGap * Math.max(0, safeRows.length - 1);
  const padding = Math.max(4, Math.round(fontSize * 0.25));
  const ruleWeight = Math.max(1, Math.round(fontSize / 14));
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Determinant");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(
    Math.ceil(contentWidth + padding * 2 + ruleWeight * 2),
    Math.ceil(contentHeight)
  );
  const leftRule = createVerticalRule({
    height: contentHeight,
    weight: ruleWeight,
    namePrefix,
    name: "DeterminantLeft"
  });
  const rightRule = createVerticalRule({
    height: contentHeight,
    weight: ruleWeight,
    namePrefix,
    name: "DeterminantRight"
  });
  leftRule.x = 0;
  leftRule.y = 0;
  rightRule.x = frame.width - ruleWeight;
  rightRule.y = 0;
  frame.appendChild(leftRule);
  frame.appendChild(rightRule);

  let currentY = 0;
  for (let rowIndex = 0; rowIndex < nodes.length; rowIndex++) {
    let currentX = ruleWeight + padding;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      const node = nodes[rowIndex][columnIndex];
      node.x = currentX + (columnWidths[columnIndex] - node.width) / 2;
      node.y = currentY + (rowHeights[rowIndex] - node.height) / 2;
      frame.appendChild(node);
      currentX += columnWidths[columnIndex] + columnGap;
    }
    currentY += rowHeights[rowIndex] + rowGap;
  }
  return frame;
}

function createVerticalCalculationInlineNode({
  rows,
  fontSize,
  fonts,
  namePrefix
}) {
  const rowGap = Math.max(2, Math.round(fontSize * 0.12));
  const rowParts = rows.map((row, index) => {
    const signMatch = row.match(/^([+＋\-－−])\s*/);
    const signValue = signMatch
      ? ({ "＋": "+", "-": "−", "－": "−" }[signMatch[1]] || signMatch[1])
      : "";
    const numericValue = signMatch
      ? row.slice(signMatch[0].length)
      : row;
    const decimalIndex = numericValue.lastIndexOf(".");
    const prefixValue = decimalIndex >= 0
      ? numericValue.slice(0, decimalIndex)
      : numericValue;
    const suffixValue = decimalIndex >= 0
      ? numericValue.slice(decimalIndex)
      : "";
    const signNode = signValue
      ? createCompactFormulaContentNode({
        value: signValue,
        fontSize,
        fonts,
        namePrefix,
        fallbackName: `VerticalSign_${index + 1}`
      })
      : null;
    const prefixNode = createCompactFormulaContentNode({
      value: prefixValue,
      fontSize,
      fonts,
      namePrefix,
      fallbackName: `VerticalPrefix_${index + 1}`
    });
    const suffixNode = suffixValue
      ? createCompactFormulaContentNode({
        value: suffixValue,
        fontSize,
        fonts,
        namePrefix,
        fallbackName: `VerticalSuffix_${index + 1}`
      })
      : null;

    return {
      signNode,
      prefixNode,
      suffixNode,
      height: Math.max(
        signNode ? signNode.height : 0,
        prefixNode.height,
        suffixNode ? suffixNode.height : 0
      )
    };
  });
  const numericPrefixWidth = Math.max(
    1,
    ...rowParts.map(item => item.prefixNode.width)
  );
  const hasSignColumn = rowParts.some(item => item.signNode);
  const signColumnWidth = hasSignColumn
    ? Math.max(
      Math.round(fontSize * 0.62),
      ...rowParts.map(item => item.signNode ? item.signNode.width : 0)
    )
    : 0;
  const decimalAxis = signColumnWidth + numericPrefixWidth;
  const suffixWidth = Math.max(
    0,
    ...rowParts.map(item => item.suffixNode ? item.suffixNode.width : 0)
  );
  const width = Math.max(1, decimalAxis + suffixWidth);
  const lineWeight = Math.max(1, Math.round(fontSize / 15));
  const lineGap = Math.max(2, Math.round(fontSize * 0.12));
  const hasResult = rowParts.length >= 3;
  const height = rowParts.reduce((sum, item) => sum + item.height, 0) +
    rowGap * Math.max(0, rowParts.length - 1) +
    (hasResult ? lineWeight + lineGap : 0);
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "VerticalCalculation");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(Math.ceil(width), Math.ceil(height));

  let currentY = 0;
  for (let index = 0; index < rowParts.length; index++) {
    if (hasResult && index === rowParts.length - 1) {
      const line = figma.createRectangle();
      line.name = withNamePrefix(namePrefix, "VerticalCalculationLine");
      line.resize(width, lineWeight);
      line.x = 0;
      line.y = currentY;
      line.fills = [{
        type: "SOLID",
        color: VISUAL_STYLE.contentTextColor
      }];
      frame.appendChild(line);
      currentY += lineWeight + lineGap;
    }
    const item = rowParts[index];
    if (item.signNode) {
      item.signNode.x =
        (signColumnWidth - item.signNode.width) / 2;
      item.signNode.y = currentY +
        (item.height - item.signNode.height) / 2;
      frame.appendChild(item.signNode);
    }
    item.prefixNode.x =
      signColumnWidth + numericPrefixWidth - item.prefixNode.width;
    item.prefixNode.y = currentY +
      (item.height - item.prefixNode.height) / 2;
    frame.appendChild(item.prefixNode);

    if (item.suffixNode) {
      item.suffixNode.x = decimalAxis;
      item.suffixNode.y = currentY +
        (item.height - item.suffixNode.height) / 2;
      frame.appendChild(item.suffixNode);
    }
    currentY += item.height + rowGap;
  }
  return frame;
}

function createRootInlineNode({
  radicand,
  fontSize,
  fonts,
  namePrefix
}) {
  const radicalText = createSingleFontTextNode({
    value: "√",
    fontName: fonts.operator || fonts.symbol,
    fontSize: Math.max(10, Math.round(fontSize * 1.12)),
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "RootSymbol")
  });
  const radicandText = createSingleFontTextNode({
    value: radicand,
    fontName: fonts.content,
    fontSize,
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "RootRadicand")
  });
  applyCharacterFonts(radicandText, radicand, fonts);

  const lineWeight = Math.max(1, Math.round(fontSize / 16));
  const topGap = Math.max(1, Math.round(fontSize * 0.08));
  const overlap = Math.max(1, Math.round(fontSize * 0.05));
  const radicandX = Math.max(0, radicalText.width - overlap);
  const radicandY = lineWeight + topGap;
  const frameWidth = Math.ceil(radicandX + radicandText.width);
  const frameHeight = Math.ceil(
    Math.max(radicalText.height, radicandY + radicandText.height)
  );

  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Root");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(frameWidth, frameHeight);

  radicalText.x = 0;
  radicalText.y = Math.max(0, frameHeight - radicalText.height);
  radicandText.x = radicandX;
  radicandText.y = radicandY;

  const rootLine = figma.createRectangle();
  rootLine.name = withNamePrefix(namePrefix, "RootLine");
  rootLine.resize(Math.max(1, radicandText.width), lineWeight);
  rootLine.x = radicandX;
  rootLine.y = 0;
  rootLine.fills = [{
    type: "SOLID",
    color: VISUAL_STYLE.contentTextColor
  }];

  frame.appendChild(radicalText);
  frame.appendChild(rootLine);
  frame.appendChild(radicandText);
  return frame;
}

function createArcInlineNode({
  label,
  fontSize,
  fonts,
  namePrefix
}) {
  const labelText = createSingleFontTextNode({
    value: label,
    fontName: fonts.latinItalic,
    fontSize,
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "ArcLabel")
  });
  const arcHeight = Math.max(4, Math.round(fontSize * 0.24));
  const lineWeight = Math.max(1, Math.round(fontSize / 16));
  const frameWidth = Math.ceil(Math.max(labelText.width, fontSize * 0.7));
  const frameHeight = Math.ceil(arcHeight + 1 + labelText.height);
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "Arc");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(frameWidth, frameHeight);

  const arcClip = figma.createFrame();
  arcClip.name = withNamePrefix(namePrefix, "ArcMark");
  arcClip.fills = [];
  arcClip.strokes = [];
  arcClip.clipsContent = true;
  arcClip.resize(frameWidth, arcHeight);

  const ellipse = figma.createEllipse();
  ellipse.name = withNamePrefix(namePrefix, "ArcEllipse");
  ellipse.fills = [];
  ellipse.strokes = [{
    type: "SOLID",
    color: VISUAL_STYLE.contentTextColor
  }];
  ellipse.strokeWeight = lineWeight;
  ellipse.resize(frameWidth, arcHeight * 2);
  ellipse.x = 0;
  ellipse.y = 1;
  arcClip.appendChild(ellipse);

  labelText.x = (frameWidth - labelText.width) / 2;
  labelText.y = arcHeight + 1;
  frame.appendChild(arcClip);
  frame.appendChild(labelText);
  return frame;
}

function createLargeOperatorInlineNode({
  operator,
  fontSize,
  fonts,
  namePrefix
}) {
  const operatorText = createSingleFontTextNode({
    value: operator,
    fontName: fonts.operator || fonts.symbol,
    fontSize: Math.max(10, Math.round(fontSize * 1.12)),
    color: VISUAL_STYLE.contentTextColor,
    name: withNamePrefix(namePrefix, "LargeOperatorGlyph")
  });
  const rightGap = Math.max(1, Math.round(fontSize * 0.15));
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, "LargeOperator");
  frame.fills = [];
  frame.strokes = [];
  frame.clipsContent = false;
  frame.resize(
    Math.ceil(operatorText.width + rightGap),
    Math.ceil(operatorText.height)
  );
  operatorText.x = 0;
  operatorText.y = 0;
  frame.appendChild(operatorText);
  return frame;
}

function buildNormalInlineSpecs(value, fonts, contextCharacters, contextOffset) {
  const characters = Array.from(String(value || ""));
  const analysisCharacters =
    Array.isArray(contextCharacters) ? contextCharacters : characters;
  const analysisOffset =
    Number.isInteger(contextOffset) ? contextOffset : 0;
  const specs = [];
  let current = null;
  let explicitItalicDepth = 0;

  function getUnitKind(char, index) {
    const analysisIndex = analysisOffset + index;
    if (char === "\n") return "newline";
    if (/\s/.test(char)) return "space";
    if (isLatinLetter(char)) return "latin";
    if (isGreekLowercase(char) || isGreekUppercase(char)) return "greek";
    if (isRomanNumeralCharacter(char)) return "roman";
    if (
      isDigitCharacter(char) ||
      isDecimalPointCharacter(analysisCharacters, analysisIndex) ||
      isTimeColonCharacter(analysisCharacters, analysisIndex) ||
      isAngleUnitCharacter(analysisCharacters, analysisIndex) ||
      isPercentUnitCharacter(analysisCharacters, analysisIndex)
    ) {
      return "digit";
    }
    if (isHanCharacter(char)) return "han";
    return "symbol";
  }

  function flush() {
    if (current) {
      specs.push(current);
      current = null;
    }
  }

  for (let index = 0; index < characters.length; index++) {
    const char = characters[index];

    if (char === EXPLICIT_ITALIC_START) {
      flush();
      explicitItalicDepth += 1;
      continue;
    }

    if (char === EXPLICIT_ITALIC_END) {
      flush();
      explicitItalicDepth = Math.max(0, explicitItalicDepth - 1);
      continue;
    }

    const kind = getUnitKind(char, index);
    const analysisIndex = analysisOffset + index;

    if (kind === "newline") {
      flush();
      specs.push({
        kind: "newline"
      });
      continue;
    }

    const supportsExplicitItalic =
      isLatinLetter(char) ||
      isDigitCharacter(char) ||
      isGreekLowercase(char) ||
      isGreekUppercase(char) ||
      isRomanNumeralCharacter(char) ||
      isDecimalPointCharacter(analysisCharacters, analysisIndex) ||
      isTimeColonCharacter(analysisCharacters, analysisIndex) ||
      isAngleUnitCharacter(analysisCharacters, analysisIndex) ||
      isPercentUnitCharacter(analysisCharacters, analysisIndex);
    const fontName =
      explicitItalicDepth > 0 && supportsExplicitItalic
        ? fonts.latinItalic
        : getContextualCharacterFont(
            analysisCharacters,
            analysisIndex,
            fonts
          );
    const specKind = char === "□" ? "square-operator" : "text";
    const canGroup =
      current &&
      current.kind === "text" &&
      specKind === "text" &&
      current.unitKind === kind &&
      kind !== "han" &&
      kind !== "symbol" &&
      sameFont(current.fontName, fontName);

    if (canGroup) {
      current.value += char;
    } else {
      flush();
      current = {
        kind: specKind,
        unitKind: kind,
        value: char,
        fontName
      };
    }
  }

  flush();
  return specs;
}

function buildRichInlineSpecs(value, fonts) {
  const text = String(value || "").replace(/\r/g, "");
  const structures = [
    ...getUnderbraceMatches(text).map(item => ({
      ...item,
      kind: "underbrace"
    })),
    ...getDelimiterMatches(text).map(item => ({
      ...item,
      kind: "delimiter"
    })),
    ...getCasesMatches(text).map(item => ({
      ...item,
      kind: "cases"
    })),
    ...getDeterminantMatches(text).map(item => ({
      ...item,
      kind: "determinant"
    })),
    ...getVerticalCalculationMatches(text).map(item => ({
      ...item,
      kind: "vertical-calculation"
    })),
    ...getPlaceholderMatches(text).map(item => ({
      ...item,
      kind: "placeholder"
    })),
    ...getExplicitFractionMatches(text).map(item => ({
      ...item,
      kind: "fraction"
    })),
    ...getFractionMatches(text).map(item => ({
      ...item,
      kind: "fraction"
    })),
    ...getScriptMatches(text).map(item => ({
      ...item,
      kind: "script"
    })),
    ...getOverlineMatches(text).map(item => ({
      ...item,
      kind: "overline"
    })),
    ...getRepeatingDecimalMatches(text).map(item => ({
      ...item,
      kind: "repeating-decimal"
    })),
    ...getPrimedGeometryMatches(text).map(item => ({
      ...item,
      kind: "primed-geometry"
    })),
    ...getAreaSubscriptMatches(text).map(item => ({
      ...item,
      kind: "area-subscript"
    })),
    ...getRootMatches(text).map(item => ({
      ...item,
      kind: "root"
    })),
    ...getArcMatches(text).map(item => ({
      ...item,
      kind: "arc"
    })),
    ...getLargeOperatorMatches(text).map(item => ({
      ...item,
      kind: "large-operator"
    }))
  ].sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    return b.end - a.end;
  });

  if (!structures.length) {
    return buildNormalInlineSpecs(text, fonts);
  }

  const specs = [];
  const fullCharacters = Array.from(text);
  let cursor = 0;

  for (const structure of structures) {
    if (structure.start < cursor) {
      continue;
    }

    if (structure.start > cursor) {
      const segmentText = text.slice(cursor, structure.start);
      const segmentOffset = Array.from(text.slice(0, cursor)).length;
      const segmentSpecs = buildNormalInlineSpecs(
        segmentText,
        fonts,
        fullCharacters,
        segmentOffset
      );

      if (
        structure.kind === "script" &&
        structure.explicit &&
        /[A-Za-z]$/.test(segmentText)
      ) {
        const baseCharacters = fullCharacters;
        const baseIndex =
          Array.from(text.slice(0, structure.start)).length - 1;
        const lastTextSpec = [...segmentSpecs].reverse().find(item => {
          return item.kind === "text" && item.unitKind === "latin";
        });

        if (
          lastTextSpec &&
          lastTextSpec.value.length === 1 &&
          !isUnitLatinLetter(baseCharacters, baseIndex)
        ) {
          lastTextSpec.fontName = fonts.latinItalic;
        }
      }

      specs.push(...segmentSpecs);
    }

    if (structure.kind === "underbrace") {
      specs.push({
        kind: "underbrace",
        body: structure.body,
        label: structure.label
      });
    } else if (structure.kind === "delimiter") {
      specs.push({
        kind: "delimiter",
        body: structure.body,
        style: structure.style,
        left: structure.left,
        right: structure.right
      });
    } else if (structure.kind === "cases") {
      specs.push({
        kind: "cases",
        rows: structure.rows
      });
    } else if (structure.kind === "determinant") {
      specs.push({
        kind: "determinant",
        rows: structure.rows
      });
    } else if (structure.kind === "vertical-calculation") {
      specs.push({
        kind: "vertical-calculation",
        rows: structure.rows
      });
    } else if (structure.kind === "placeholder") {
      specs.push({
        kind: "placeholder",
        shape: structure.shape,
        value: structure.value
      });
    } else if (structure.kind === "fraction") {
      specs.push({
        kind: "fraction",
        numerator: structure.numerator,
        denominator: structure.denominator
      });
    } else if (structure.kind === "script") {
      specs.push({
        kind: "script",
        position: structure.position,
        value: structure.value
      });
    } else if (structure.kind === "overline") {
      specs.push({
        kind: "overline",
        label: structure.label
      });
    } else if (structure.kind === "repeating-decimal") {
      specs.push({
        kind: "repeating-decimal",
        label: structure.label,
        displayText: structure.displayText,
        dotMode: structure.dotMode,
        dotStart: structure.dotStart,
        dotEnd: structure.dotEnd
      });
    } else if (structure.kind === "primed-geometry") {
      specs.push({
        kind: "primed-geometry",
        value: structure.value
      });
    } else if (structure.kind === "area-subscript") {
      specs.push({
        kind: "area-subscript",
        label: structure.label
      });
    } else if (structure.kind === "root") {
      specs.push({
        kind: "root",
        radicand: structure.radicand
      });
    } else if (structure.kind === "arc") {
      specs.push({
        kind: "arc",
        label: structure.label
      });
    } else {
      specs.push({
        kind: "large-operator",
        operator: structure.operator
      });
    }
    cursor = structure.end;
  }

  if (cursor < text.length) {
    specs.push(
      ...buildNormalInlineSpecs(
        text.slice(cursor),
        fonts,
        fullCharacters,
        Array.from(text.slice(0, cursor)).length
      )
    );
  }

  return specs;
}

function createRichTextBlock({
  value,
  maxWidth,
  fontSize,
  fonts,
  align,
  namePrefix,
  avoidLeadingSymbols = false
}) {
  const block = figma.createFrame();
  block.name = withNamePrefix(namePrefix, "RichText");
  block.fills = [];
  block.strokes = [];
  block.clipsContent = false;

  const specs = buildRichInlineSpecs(value, fonts);
  const lines = [];
  let currentLine = [];
  let currentWidth = 0;

  function getInlineAlignmentAnchor(node, spec) {
    if (
      spec.kind === "cases" ||
      spec.kind === "determinant" ||
      spec.kind === "vertical-calculation"
    ) {
      return node.height / 2 + fontSize * 0.25;
    }

    if (spec.kind === "delimiter") {
      const bodyNode = node.children.find(child => {
        return layerNameIncludes(child, "DelimiterBody");
      });
      if (bodyNode) {
        return (
          bodyNode.y +
          getNestedFormulaAlignmentAnchor(bodyNode, fontSize)
        );
      }
    }

    if (spec.kind === "underbrace") {
      const bodyNode = node.children.find(child => {
        return layerNameIncludes(child, "UnderbraceBody");
      });
      if (bodyNode) {
        return (
          bodyNode.y +
          getNestedFormulaAlignmentAnchor(bodyNode, fontSize)
        );
      }
    }

    if (
      spec.kind === "placeholder" ||
      spec.kind === "square-operator"
    ) {
      return node.height / 2 + fontSize * 0.25;
    }

    if (spec.kind === "fraction") {
      const fractionLine = node.children.find(child => {
        return layerNameEndsWith(child, "FractionLine");
      });
      const mathAxis = fractionLine
        ? fractionLine.y + fractionLine.height / 2
        : node.height / 2;

      // 分数线中心对齐正文数学轴；0.32em 包含 Times/Cambria 在 Figma
      // 中的光学基线补偿，避免分数整体相对正文下沉。
      return (
        mathAxis +
        fontSize * FRACTION_AXIS_FROM_BASELINE_RATIO
      );
    }

    if (spec.kind === "script") {
      return Math.min(node.height, fontSize * 0.86);
    }

    if (
      spec.kind === "overline" ||
      spec.kind === "repeating-decimal"
    ) {
      const suffix = spec.kind === "overline"
        ? "OverlineText"
        : "RepeatingDecimalText";
      const labelText = node.children.find(child => {
        return layerNameEndsWith(child, suffix);
      });

      if (labelText) {
        return labelText.y + Math.min(
          labelText.height,
          fontSize * 0.86
        );
      }
    }

    if (spec.kind === "primed-geometry") {
      const firstLetter = node.children.find(child => {
        return layerNameIncludes(child, "PrimedGeometryLetter");
      });

      if (firstLetter) {
        return firstLetter.y + Math.min(
          firstLetter.height,
          fontSize * 0.86
        );
      }
    }

    if (spec.kind === "area-subscript") {
      const baseText = node.children.find(child => {
        return layerNameEndsWith(child, "AreaSubscriptBase");
      });

      if (baseText) {
        return baseText.y + Math.min(
          baseText.height,
          fontSize * 0.86
        );
      }
    }

    if (spec.kind === "root") {
      const radicandText = node.children.find(child => {
        return layerNameEndsWith(child, "RootRadicand");
      });

      if (radicandText) {
        return radicandText.y + Math.min(
          radicandText.height,
          fontSize * 0.86
        );
      }
    }

    if (spec.kind === "arc") {
      const labelText = node.children.find(child => {
        return layerNameEndsWith(child, "ArcLabel");
      });

      if (labelText) {
        return labelText.y + Math.min(
          labelText.height,
          fontSize * 0.86
        );
      }
    }

    if (spec.kind === "large-operator") {
      const glyph = node.children.find(child => {
        return layerNameEndsWith(child, "LargeOperatorGlyph");
      });
      return glyph
        ? Math.min(glyph.height, fontSize * 0.94)
        : Math.min(node.height, fontSize * 0.94);
    }

    // Figma 不暴露逐字体基线指标；按字号与行高估算共同基线。
    return Math.min(node.height, fontSize * 0.86);
  }

  function takeTrailingCharacterFromCurrentLine() {
    while (
      currentLine.length > 1 &&
      currentLine[currentLine.length - 1].spec.unitKind === "space"
    ) {
      const trailingSpace = currentLine.pop();
      currentWidth -= trailingSpace.node.width;
      trailingSpace.node.remove();
    }

    if (!currentLine.length) return null;

    const lastItem = currentLine[currentLine.length - 1];
    const characters = Array.from(String(lastItem.spec.value || ""));

    if (
      lastItem.node.type === "TEXT" &&
      lastItem.spec.kind === "text" &&
      characters.length > 1
    ) {
      const carriedCharacter = characters.pop();
      const originalWidth = lastItem.node.width;
      lastItem.spec = {
        ...lastItem.spec,
        value: characters.join("")
      };
      lastItem.node.characters = lastItem.spec.value;
      currentWidth += lastItem.node.width - originalWidth;

      const carriedSpec = {
        ...lastItem.spec,
        value: carriedCharacter
      };
      const carriedNode = createSingleFontTextNode({
        value: carriedCharacter,
        fontName: carriedSpec.fontName,
        fontSize,
        color: VISUAL_STYLE.contentTextColor,
        name: withNamePrefix(namePrefix, "RichTextCarriedCharacter")
      });

      return {
        node: carriedNode,
        spec: carriedSpec,
        alignmentAnchor: getInlineAlignmentAnchor(carriedNode, carriedSpec)
      };
    }

    if (currentLine.length <= 1) return null;

    const carriedItem = currentLine.pop();
    currentWidth -= carriedItem.node.width;
    return carriedItem;
  }

  function finishLine() {
    if (!currentLine.length) {
      lines.push({
        items: [],
        width: 0,
        height: Math.ceil(fontSize * 1.32),
        anchor: fontSize * 0.86
      });
    } else {
      const visualReference = currentLine.find(item => {
        return (
          item.node.type === "TEXT" &&
          item.spec.unitKind !== "space"
        );
      });

      if (visualReference) {
        const referenceVisualCenter = getTextVisualCenterY(
          visualReference.node
        );
        const referenceCenterFromBaseline =
          visualReference.alignmentAnchor - referenceVisualCenter;

        for (const item of currentLine) {
          if (
            item.spec.kind === "placeholder" ||
            item.spec.kind === "square-operator"
          ) {
            item.alignmentAnchor =
              item.node.height / 2 +
              referenceCenterFromBaseline;
          }
        }
      }

      const anchor = Math.max(
        ...currentLine.map(item => item.alignmentAnchor)
      );
      const descent = Math.max(
        ...currentLine.map(item => {
          return item.node.height - item.alignmentAnchor;
        })
      );

      lines.push({
        items: currentLine,
        width: currentWidth,
        height: Math.ceil(anchor + descent),
        anchor
      });
    }

    currentLine = [];
    currentWidth = 0;
  }

  for (const spec of specs) {
    if (spec.kind === "newline") {
      finishLine();
      continue;
    }

    let node;

    if (spec.kind === "underbrace") {
      node = createUnderbraceInlineNode({
        body: spec.body,
        label: spec.label,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "delimiter") {
      node = createDelimiterInlineNode({
        body: spec.body,
        style: spec.style,
        left: spec.left,
        right: spec.right,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "cases") {
      node = createCasesInlineNode({
        rows: spec.rows,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "determinant") {
      node = createDeterminantInlineNode({
        rows: spec.rows,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "vertical-calculation") {
      node = createVerticalCalculationInlineNode({
        rows: spec.rows,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "placeholder") {
      node = createPlaceholderInlineNode({
        shape: spec.shape,
        fontSize,
        namePrefix
      });
    } else if (spec.kind === "square-operator") {
      node = createPlaceholderInlineNode({
        shape: "square",
        fontSize,
        namePrefix: withNamePrefix(namePrefix, "SquareOperator")
      });
    } else if (spec.kind === "fraction") {
      node = createFractionInlineNode({
        numerator: spec.numerator,
        denominator: spec.denominator,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "script") {
      node = createScriptInlineNode({
        value: spec.value,
        position: spec.position,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "overline") {
      node = createOverlineInlineNode({
        label: spec.label,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "repeating-decimal") {
      node = createRepeatingDecimalInlineNode({
        label: spec.label,
        displayText: spec.displayText,
        dotMode: spec.dotMode,
        dotStart: spec.dotStart,
        dotEnd: spec.dotEnd,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "primed-geometry") {
      node = createPrimedGeometryInlineNode({
        value: spec.value,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "area-subscript") {
      node = createAreaSubscriptInlineNode({
        label: spec.label,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "root") {
      node = createRootInlineNode({
        radicand: spec.radicand,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "arc") {
      node = createArcInlineNode({
        label: spec.label,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.kind === "large-operator") {
      node = createLargeOperatorInlineNode({
        operator: spec.operator,
        fontSize,
        fonts,
        namePrefix
      });
    } else if (
      spec.kind === "text" &&
      spec.value === "∥"
    ) {
      node = createParallelInlineNode({
        fontSize,
        fonts,
        namePrefix
      });
    } else if (spec.unitKind === "space") {
      node = createInlineSpacerNode({
        value: spec.value,
        fontSize,
        name: withNamePrefix(namePrefix, "RichTextSpacer")
      });
    } else {
      node = createSingleFontTextNode({
        value: spec.value,
        fontName: spec.fontName,
        fontSize,
        color: VISUAL_STYLE.contentTextColor,
        name: withNamePrefix(namePrefix, "RichTextSegment")
      });
    }

    const isLeadingSpace =
      spec.kind === "text" &&
      spec.unitKind === "space" &&
      currentLine.length === 0;

    if (isLeadingSpace) {
      node.remove();
      continue;
    }

    if (
      currentLine.length > 0 &&
      currentWidth + node.width > maxWidth
    ) {
      let carriedItem = null;

      if (avoidLeadingSymbols && isLineLeadingSymbol(spec.value)) {
        carriedItem = takeTrailingCharacterFromCurrentLine();
      }

      finishLine();

      if (carriedItem) {
        currentLine.push(carriedItem);
        currentWidth = carriedItem.node.width;
      }

      if (spec.kind === "text" && spec.unitKind === "space") {
        node.remove();
        continue;
      }
    }

    currentLine.push({
      node,
      spec,
      alignmentAnchor: getInlineAlignmentAnchor(node, spec)
    });
    currentWidth += node.width;
  }

  if (currentLine.length || !lines.length) {
    finishLine();
  }

  const lineGap = Math.max(3, Math.round(fontSize * 0.22));
  let currentY = 0;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const lineFrame = figma.createFrame();
    lineFrame.name = withNamePrefix(namePrefix, `RichTextLine_${index + 1}`);
    lineFrame.fills = [];
    lineFrame.strokes = [];
    lineFrame.clipsContent = false;
    lineFrame.resize(maxWidth, line.height);

    let currentX =
      align === "CENTER" ? Math.max(0, (maxWidth - line.width) / 2) : 0;

    for (const item of line.items) {
      item.node.x = currentX;
      item.node.y = Math.max(0, line.anchor - item.alignmentAnchor);
      lineFrame.appendChild(item.node);
      currentX += item.node.width;
    }

    lineFrame.x = 0;
    lineFrame.y = currentY;
    block.appendChild(lineFrame);
    currentY += line.height;

    if (index < lines.length - 1) {
      currentY += lineGap;
    }
  }

  block.resize(maxWidth, Math.max(1, currentY));
  return block;
}

function measureRichTextBlock(value, maxWidth, fontSize, fonts) {
  const block = createRichTextBlock({
    value,
    maxWidth,
    fontSize,
    fonts,
    align: "LEFT",
    namePrefix: "measure"
  });
  const result = {
    width: block.width,
    height: block.height,
    lineCount: block.children.length
  };
  block.remove();
  return result;
}

function isLineLeadingSymbol(value) {
  return /^\s*[，。！？；：、,.!?;:（）()《》〈〉【】〔〕［］\[\]{}“”‘’「」『』…—+\-−×÷=<>≤≥≈≠∥⊥∠∪∩%％°℃]/.test(
    String(value || "")
  );
}

function carryPreviousCharacterToLeadingSymbolLines(lines) {
  const adjusted = lines.map(line => String(line || ""));

  for (let index = 1; index < adjusted.length; index++) {
    if (!isLineLeadingSymbol(adjusted[index])) continue;

    const previous = adjusted[index - 1].replace(/\s+$/g, "");
    const previousCharacters = Array.from(previous);
    if (previousCharacters.length <= 1) continue;

    const carriedCharacter = previousCharacters.pop();
    adjusted[index - 1] = previousCharacters.join("");
    adjusted[index] = carriedCharacter + adjusted[index].replace(/^\s+/, "");
  }

  return adjusted;
}

function wrapPlainQuestionText(value, maxWidth, fontSize, fonts) {
  const sourceLines = String(value || "").replace(/\r/g, "").split("\n");
  const wrappedLines = [];

  for (const sourceLine of sourceLines) {
    const characters = Array.from(sourceLine);
    let currentLine = "";

    for (const character of characters) {
      const candidate = currentLine + character;
      if (
        currentLine &&
        measureRealTextWidth(candidate, fontSize, fonts) > maxWidth
      ) {
        wrappedLines.push(currentLine);
        currentLine = character;
      } else {
        currentLine = candidate;
      }
    }

    wrappedLines.push(currentLine);
  }

  return carryPreviousCharacterToLeadingSymbolLines(wrappedLines).join("\n");
}

function createQuestionFrame({ value, width, settings, fonts, namePrefix }) {
  const paddingX = 18;
  const paddingY = 14;
  const textWidth = QUESTION_MAX_TEXT_WIDTH;
  const frameWidth = Math.max(width, textWidth + paddingX * 2);
  const questionFrame = figma.createFrame();
  questionFrame.name = withNamePrefix(namePrefix, "Question");
  const hasBackground = settings.questionBackground !== "none";
  questionFrame.fills = hasBackground
    ? [{
        type: "SOLID",
        color: VISUAL_STYLE.optionFillColor
      }]
    : [];
  questionFrame.strokes = hasBackground
    ? [{
        type: "SOLID",
        color: VISUAL_STYLE.optionStrokeColor
      }]
    : [];
  questionFrame.strokeWeight = hasBackground ? 2 : 0;
  questionFrame.cornerRadius = hasBackground ? 18 : 0;
  // 背景按最终文本高度增长；如测量异常也不静默裁掉内容。
  questionFrame.clipsContent = false;

  const displayValue = normalizeDisplayMathText(
    value,
    settings.parenthesisBlankSize
  );
  let contentNode;

  if (containsRichMath(displayValue)) {
    contentNode = createRichTextBlock({
      value: displayValue,
      maxWidth: textWidth,
      fontSize: settings.fontSize,
      fonts,
      align: "LEFT",
      namePrefix,
      avoidLeadingSymbols: true
    });
  } else {
    const wrappedDisplayValue = wrapPlainQuestionText(
      displayValue,
      textWidth,
      settings.fontSize,
      fonts
    );
    const text = figma.createText();
    text.name = withNamePrefix(namePrefix, "QuestionText");
    text.fontName = fonts.content;
    text.fontSize = settings.fontSize;
    text.characters = wrappedDisplayValue;
    applyCharacterFonts(text, text.characters, fonts);
    text.textAlignHorizontal = "LEFT";
    text.textAlignVertical = "TOP";
    text.lineHeight = {
      unit: "PERCENT",
      value: 132
    };
    text.fills = [
      {
        type: "SOLID",
        color: VISUAL_STYLE.contentTextColor
      }
    ];
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    const initialHeight = Math.max(settings.fontSize * 1.4, text.height);
    text.resize(textWidth, initialHeight);
    text.textAutoResize = "HEIGHT";
    contentNode = text;
  }

  contentNode.x = paddingX;

  const frameHeight = Math.ceil(contentNode.height + paddingY * 2);
  contentNode.y = paddingY;

  questionFrame.resize(frameWidth, frameHeight);
  questionFrame.appendChild(contentNode);

  return questionFrame;
}

function splitNumberedContent(value) {
  const text = String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(
      /(?:^|\n)\s*(?:小灯泡|负反馈)\s*(\d+)\s*[：:、.．)]?\s*/g,
      function (_, sequence) {
        return `\n${sequence}. `;
      }
    )
    .replace(/^\n/, "")
    .trim();
  if (!text) return [];

  const marker = /(?:^|\n)\s*(?:[（(]?\s*(\d+)\s*[）).．、:：]|([①②③④⑤⑥⑦⑧⑨⑩]))\s*/g;
  const circled = "①②③④⑤⑥⑦⑧⑨⑩";
  const matches = [];
  let match;

  while ((match = marker.exec(text)) !== null) {
    matches.push({
      index: match.index,
      contentStart: marker.lastIndex,
      sequence: match[1] ? Number(match[1]) : circled.indexOf(match[2]) + 1
    });
  }

  if (!matches.length) {
    return [{ sequence: 1, text }];
  }

  return matches.map(function (item, index) {
    const end = index + 1 < matches.length ? matches[index + 1].index : text.length;
    return {
      sequence: item.sequence,
      text: text.slice(item.contentStart, end).trim()
    };
  }).filter(function (item) {
    return item.text;
  });
}

function stripSupplementalDisplayLabel(value, kind, sequence) {
  const label = kind === "lightbulb" ? "小灯泡" : "负反馈";
  return String(value || "")
    .replace(
      new RegExp(`^\\s*${label}\\s*${sequence}\\s*[：:、.．)]?\\s*`),
      ""
    )
    .trim();
}

function decodeBase64Bytes(base64) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const clean = String(base64 || "").replace(/[^A-Za-z0-9+/]/g, "");
  const bytes = [];
  let buffer = 0;
  let bitCount = 0;

  for (const char of clean) {
    const value = alphabet.indexOf(char);
    if (value < 0) continue;
    buffer = (buffer << 6) | value;
    bitCount += 6;
    if (bitCount >= 8) {
      bitCount -= 8;
      bytes.push((buffer >> bitCount) & 0xff);
    }
  }

  return new Uint8Array(bytes);
}

function decodeBase64Text(base64) {
  const bytes = decodeBase64Bytes(base64);
  let text = "";

  for (let index = 0; index < bytes.length; index += 8192) {
    text += String.fromCharCode.apply(
      null,
      bytes.slice(index, Math.min(index + 8192, bytes.length))
    );
  }

  return text;
}

function createLightbulbAssetFrame({
  value,
  settings,
  fonts,
  namePrefix,
  sequence
}) {
  const frameWidth = 404;
  const bodyX = 1;
  const bodyY = 27;
  const bodyWidth = 403;
  const padding = 20;
  const textWidth = 362;
  const fontSize = LIGHTBULB_TEXT_FONT_SIZE;
  const displayValue = normalizeDisplayMathText(
    value,
    settings.parenthesisBlankSize
  );
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, `小灯泡${sequence}`);
  frame.setPluginData("supplementalKind", "lightbulb");
  frame.fills = [];
  frame.clipsContent = false;

  const body = figma.createFrame();
  body.name = withNamePrefix(namePrefix, `小灯泡${sequence}-background`);
  body.fills = [{
    type: "SOLID",
    color: { r: 254 / 255, g: 221 / 255, b: 1 / 255 }
  }];
  body.strokes = [];
  body.cornerRadius = 14;
  body.clipsContent = false;
  let contentNode;

  if (containsRichMath(displayValue)) {
    contentNode = createRichTextBlock({
      value: displayValue,
      maxWidth: textWidth,
      fontSize,
      fonts,
      align: "LEFT",
      namePrefix: withNamePrefix(namePrefix, `小灯泡${sequence}`)
    });
  } else {
    const text = figma.createText();
    text.name = withNamePrefix(namePrefix, `小灯泡${sequence}-text`);
    text.fontName = fonts.content;
    text.fontSize = fontSize;
    text.characters = displayValue;
    applyCharacterFonts(text, text.characters, fonts);
    text.textAlignHorizontal = "JUSTIFIED";
    text.textAlignVertical = "TOP";
    text.lineHeight = { unit: "PIXELS", value: 34 };
    text.fills = [{
      type: "SOLID",
      color: { r: 130 / 255, g: 61 / 255, b: 25 / 255 }
    }];
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.resize(textWidth, Math.max(34, text.height));
    text.textAutoResize = "HEIGHT";
    contentNode = text;
  }

  contentNode.x = padding;
  contentNode.y = padding;
  const bodyHeight = Math.ceil(contentNode.height + padding * 2);
  body.resize(bodyWidth, bodyHeight);
  body.x = bodyX;
  body.y = bodyY;
  body.appendChild(contentNode);
  frame.appendChild(body);

  const title = figma.createNodeFromSvg(
    decodeBase64Text(LIGHTBULB_TITLE_SVG_BASE64)
  );
  title.name = withNamePrefix(namePrefix, `小灯泡${sequence}-title`);
  title.x = 0;
  title.y = 0;
  frame.appendChild(title);
  frame.resize(frameWidth, bodyY + bodyHeight);
  return frame;
}

function createSupplementalAssetFrame({
  value,
  width,
  settings,
  fonts,
  namePrefix,
  kind,
  sequence
}) {
  const isLightbulb = kind === "lightbulb";

  if (isLightbulb) {
    return createLightbulbAssetFrame({
      value,
      settings,
      fonts,
      namePrefix,
      sequence
    });
  }

  const paddingX = 0;
  const paddingY = 0;
  const frameWidth = 1162;
  const frameHeight = 550;
  const textWidth = 1122;
  const frame = figma.createFrame();
  frame.name = withNamePrefix(namePrefix, `负反馈${sequence}`);
  frame.setPluginData("supplementalKind", "negative-feedback");
  frame.fills = [];
  frame.strokes = [];
  frame.strokeWeight = 0;
  frame.cornerRadius = 0;
  frame.clipsContent = false;

  const displayValue = normalizeDisplayMathText(
    value,
    settings.parenthesisBlankSize
  );
  let contentNode;

  if (containsRichMath(displayValue)) {
    contentNode = createRichTextBlock({
      value: displayValue,
      maxWidth: textWidth,
      fontSize: settings.fontSize,
      fonts,
      align: "CENTER",
      namePrefix: withNamePrefix(namePrefix, `负反馈${sequence}`)
    });
  } else {
    const text = figma.createText();
    text.name = withNamePrefix(namePrefix, `负反馈${sequence}-text`);
    text.fontName = fonts.content;
    text.fontSize = settings.fontSize;
    text.characters = displayValue;
    applyCharacterFonts(text, text.characters, fonts);
    text.textAlignHorizontal = "CENTER";
    text.textAlignVertical = "CENTER";
    text.lineHeight = { unit: "PERCENT", value: 132 };
    text.fills = [{
      type: "SOLID",
      color: VISUAL_STYLE.contentTextColor
    }];
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.resize(textWidth, Math.max(settings.fontSize * 1.4, text.height));
    text.textAutoResize = "HEIGHT";
    contentNode = text;
  }

  contentNode.x = 20;
  contentNode.y = Math.max(0, (frameHeight - contentNode.height) / 2);
  frame.resize(frameWidth, frameHeight);
  frame.appendChild(contentNode);
  return frame;
}

function createSupplementalFrames({ rowData, width, settings, fonts, namePrefix }) {
  const lightbulbs = splitNumberedContent(rowData.LIGHTBULB || rowData["小灯泡"]);
  const negativeFeedback = splitNumberedContent(
    rowData.NEGATIVEFEEDBACK || rowData.NEGATIVE_FEEDBACK || rowData["负反馈"]
  );

  return [
    ...lightbulbs.map(function (item) {
      return createSupplementalAssetFrame({
        value: stripSupplementalDisplayLabel(
          item.text,
          "lightbulb",
          item.sequence
        ),
        width,
        settings,
        fonts,
        namePrefix,
        kind: "lightbulb",
        sequence: item.sequence
      });
    }),
    ...negativeFeedback.map(function (item) {
      return createSupplementalAssetFrame({
        value: stripSupplementalDisplayLabel(
          item.text,
          "negative-feedback",
          item.sequence
        ),
        width,
        settings,
        fonts,
        namePrefix,
        kind: "negative-feedback",
        sequence: item.sequence
      });
    })
  ];
}

function groupSupplementalFramesByKind(frames) {
  const lightbulbs = [];
  const negativeFeedback = [];
  const other = [];

  for (const frame of frames) {
    const kind = frame.getPluginData("supplementalKind");
    if (kind === "lightbulb") {
      lightbulbs.push(frame);
    } else if (kind === "negative-feedback") {
      negativeFeedback.push(frame);
    } else {
      other.push(frame);
    }
  }

  return [lightbulbs, negativeFeedback, other].filter(row => row.length > 0);
}

const LAYOUT_RULES = {
  // 选项框最小尺寸仍然使用插件界面里的宽高，比如 144 × 86
  // 但每一道题可以在这个基础上单独变宽，下一题重新计算
  maxOptionWidth: 320,
  maxOptionHeight: 100,
  textPaddingX: 10,
  textPaddingY: 8,
  textPaddingRight: 10,
  textPaddingBottom: 8,
  badgeContentGap: 10,
  badgeShadowClearance: 4,
  lineHeightPercent: 110,
  punctuationSearchRadius: 8
};

function getOptionTextContentBounds(optionWidth, optionHeight, badgeStyle) {
  const referenceHeight = Math.max(
    optionHeight,
    LAYOUT_RULES.maxOptionHeight
  );
  const contentOnly = badgeStyle === "content";
  const y = contentOnly ? 6 : LAYOUT_RULES.textPaddingY;
  let x = LAYOUT_RULES.textPaddingX;

  if (badgeStyle === "vertical") {
    x =
      getVerticalBadgeWidth(referenceHeight) +
      LAYOUT_RULES.badgeContentGap;
  } else if (badgeStyle === "circle") {
    x = getCircleBadgeSafeLeft(optionWidth, referenceHeight);
  } else if (contentOnly) {
    x = 8;
  }

  const right = contentOnly ? 8 : LAYOUT_RULES.textPaddingRight;
  const bottom = contentOnly ? 6 : LAYOUT_RULES.textPaddingBottom;
  const width = Math.max(
    contentOnly ? 1 : 20,
    optionWidth - x - right
  );
  const height = Math.max(
    contentOnly ? 1 : 20,
    optionHeight - y - bottom
  );

  return {
    x,
    y,
    width,
    height,
    right,
    bottom
  };
}

function getCircleBadgeSafeLeft(optionWidth, referenceHeight) {
  const visual = getOptionVisualStyle(optionWidth, referenceHeight);
  const outerBadgeSize = Math.round(visual.badgeSize * 1.17);
  const badgeCenterX = visual.badgeX + visual.badgeSize / 2;
  const badgeOuterRight = badgeCenterX + outerBadgeSize / 2;
  const safeLeft = Math.ceil(
    badgeOuterRight +
    LAYOUT_RULES.badgeContentGap +
    LAYOUT_RULES.badgeShadowClearance
  );
  return Math.max(LAYOUT_RULES.textPaddingX, safeLeft);
}

function analyzeOptionGroupLayout({ rowData, settings, fonts, keys, imagesForThisRow }) {
  const isManualWidth = settings.optionWidthMode === "manual";
  const minOptionWidth = isManualWidth ? settings.optionWidth : 144;
  const minOptionHeight = settings.optionHeight;
  const maxOptionHeight = Math.max(minOptionHeight, LAYOUT_RULES.maxOptionHeight);
  const baseFontSize = settings.fontSize || STANDARD_TEXT_FONT_SIZE;

  const textValues = keys.map(key => {
    if (imagesForThisRow && imagesForThisRow[key]) {
      return "";
    }

    return normalizeDisplayMathText(
      rowData[key],
      settings.parenthesisBlankSize
    );
  });

  if (settings.badgeStyle === "content") {
    const optionResults = {};

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const value = String(rowData[key] || "").trim();
      const normalizedValue = textValues[index];
      const hasImage = Boolean(
        imagesForThisRow && imagesForThisRow[key]
      );

      if (hasImage) {
        optionResults[key] = {
          text: "",
          fontSize: baseFontSize,
          lineCount: 0,
          frameWidth: minOptionWidth,
          frameHeight: minOptionHeight
        };
        continue;
      }

      const measurableValue = normalizedValue
        .split(EXPLICIT_ITALIC_START).join("")
        .split(EXPLICIT_ITALIC_END).join("");
      const oneLineWidth = Math.max(
        20,
        measureRealTextWidth(
          measurableValue,
          baseFontSize,
          fonts
        )
      );
      const frameWidth = isManualWidth
        ? settings.optionWidth
        : Math.ceil(oneLineWidth + 16);
      const contentBounds = getOptionTextContentBounds(
        frameWidth,
        minOptionHeight,
        settings.badgeStyle
      );
      const fitted = fitSmartTextForOption({
        value,
        maxTextWidth: contentBounds.width,
        fonts,
        parenthesisBlankSize: settings.parenthesisBlankSize,
        fontSize: baseFontSize
      });
      const frameHeight = Math.ceil(
        fitted.height + contentBounds.y + contentBounds.bottom
      );

      optionResults[key] = {
        ...fitted,
        frameWidth,
        frameHeight
      };
    }

    return {
      optionWidth: Math.max(
        ...Object.values(optionResults).map(option => option.frameWidth)
      ),
      optionHeight: Math.max(
        ...Object.values(optionResults).map(option => option.frameHeight)
      ),
      options: optionResults
    };
  }

  let longestOneLineWidth = 0;

  for (const value of textValues) {
    if (!value) continue;
    longestOneLineWidth = Math.max(
      longestOneLineWidth,
      measureRealTextWidth(value, baseFontSize, fonts)
    );
  }

  // 自动模式优先让最长选项完整单行；手动模式使用用户指定的整体宽度。
  const minimumContentBounds = getOptionTextContentBounds(
    minOptionWidth,
    maxOptionHeight,
    settings.badgeStyle
  );
  const reservedHorizontalSpace =
    minimumContentBounds.x + minimumContentBounds.right;
  const desiredWidth = Math.ceil(
    longestOneLineWidth + reservedHorizontalSpace
  );

  const optionWidth = isManualWidth
    ? settings.optionWidth
    : Math.max(minOptionWidth, desiredWidth);

  const contentBounds = getOptionTextContentBounds(
    optionWidth,
    maxOptionHeight,
    settings.badgeStyle
  );
  const maxTextWidth = contentBounds.width;

  const optionResults = {};

  for (const key of keys) {
    const value = String(rowData[key] || "").trim();
    const hasImage = Boolean(imagesForThisRow && imagesForThisRow[key]);

    if (hasImage) {
      optionResults[key] = {
        text: "",
        fontSize: baseFontSize,
        lineCount: 0,
        frameHeight: minOptionHeight
      };
      continue;
    }

    const fitted = fitSmartTextForOption({
      value,
      maxTextWidth,
      fonts,
      parenthesisBlankSize: settings.parenthesisBlankSize,
      fontSize: getPreferredFontSizeForText(
        value,
        baseFontSize,
        maxOptionHeight
      )
    });

    optionResults[key] = {
      ...fitted,
      frameHeight: Math.max(
        minOptionHeight,
        Math.ceil(
        fitted.height +
        contentBounds.y +
        contentBounds.bottom
      )
      )
    };
  }

  const optionHeight = Math.max(
    minOptionHeight,
    ...Object.values(optionResults).map(option => {
      return option.frameHeight;
    })
  );

  // 不同题仍可按内容自适应；同一道题内所有选项统一高宽。
  for (const option of Object.values(optionResults)) {
    option.frameWidth = optionWidth;
    option.frameHeight = optionHeight;
  }

  return {
    optionWidth,
    optionHeight,
    options: optionResults
  };
}

function getPreferredFontSizeForText(value, baseFontSize, maxOptionHeight) {
  return baseFontSize;
}

function fitSmartTextForOption({
  value,
  maxTextWidth,
  fonts,
  fontSize,
  parenthesisBlankSize
}) {
  const cleanValue = normalizeDisplayMathText(
    cleanLayoutText(value),
    parenthesisBlankSize
  );

  if (!cleanValue) {
    return {
      text: "",
      fontSize,
      lineCount: 1,
      height: fontSize
    };
  }

  if (containsRichMath(cleanValue)) {
    const block = measureRichTextBlock(
      cleanValue,
      maxTextWidth,
      fontSize,
      fonts
    );

    return {
      text: cleanValue,
      fontSize,
      lineCount: Math.max(1, block.lineCount || 1),
      height: block.height,
      rich: true
    };
  }

  const text = wrapOptionTextSmart({
    value: cleanValue,
    maxTextWidth,
    fontSize,
    fonts
  });
  const block = measureRealTextBlock(text, fontSize, fonts);

  return {
    text,
    fontSize,
    lineCount: text ? text.split("\n").length : 1,
    height: block.height
  };
}

function wrapOptionTextSmart({ value, maxTextWidth, fontSize, fonts }) {
  const text = protectInlineMathGroups(cleanLayoutText(value));

  if (!text) return "";

  // 能放下就坚决不拆。
  if (measureRealTextWidth(text, fontSize, fonts) <= maxTextWidth) {
    return text;
  }

  // 数学短表达式尽量不拆，避免 AB // CD、∠B = ∠D 被拆开。
  if (isShortMathText(text)) {
    return text;
  }

  // 放不下时，先按“内容接近一半”拆一次；优先在中间附近标点后拆。
  let lines = splitTextNearHalf(text);

  // 如果某一行依然超宽，再继续对这一行按一半拆。
  lines = splitLinesUntilFit(lines, maxTextWidth, fontSize, fonts);

  return lines.join("\n");
}

function splitLinesUntilFit(lines, maxTextWidth, fontSize, fonts) {
  const result = [];

  for (const line of lines) {
    const cleanLine = cleanLayoutText(line);

    if (!cleanLine) continue;

    if (measureRealTextWidth(cleanLine, fontSize, fonts) <= maxTextWidth || cleanLine.length <= 2) {
      result.push(cleanLine);
      continue;
    }

    const subLines = splitTextNearHalf(cleanLine);

    if (subLines.length === 1) {
      result.push(cleanLine);
      continue;
    }

    result.push(...splitLinesUntilFit(subLines, maxTextWidth, fontSize, fonts));
  }

  return result;
}

function splitTextNearHalf(text) {
  const clean = cleanLayoutText(text);

  if (clean.length <= 1) {
    return [clean];
  }

  const middle = Math.floor(clean.length / 2);
  const radius = Math.min(
    LAYOUT_RULES.punctuationSearchRadius,
    Math.max(2, Math.floor(clean.length * 0.25))
  );

  const punctuationPattern = /[，。；：、！？,.!?:;]/;
  let bestIndex = -1;
  let bestDistance = Infinity;

  for (let i = Math.max(0, middle - radius); i <= Math.min(clean.length - 2, middle + radius); i++) {
    if (!punctuationPattern.test(clean[i])) continue;

    const distance = Math.abs(i - middle);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = i + 1;
    }
  }

  if (bestIndex > 0 && bestIndex < clean.length) {
    return [
      clean.slice(0, bestIndex).trim(),
      clean.slice(bestIndex).trim()
    ].filter(Boolean);
  }

  let safeIndex = -1;

  for (let distance = 0; distance < clean.length; distance++) {
    const candidates = [middle + distance, middle - distance];

    for (const candidate of candidates) {
      if (
        candidate > 0 &&
        candidate < clean.length &&
        !isUnsafeMathLineBreak(clean, candidate)
      ) {
        safeIndex = candidate;
        break;
      }
    }

    if (safeIndex > 0) break;
  }

  if (safeIndex < 1) {
    return [clean];
  }

  return [
    clean.slice(0, safeIndex).trim(),
    clean.slice(safeIndex).trim()
  ].filter(Boolean);
}

function isShortMathText(text) {
  const clean = cleanLayoutText(text);
  return clean.length <= 14 && /[=∠+\-×÷/\\]/.test(clean);
}

function cleanLayoutText(text) {
  return String(text || "")
    .replace(/\r/g, "")
    .replace(/\n+/g, " ")
    .replace(/\u00a0/g, "\ue000")
    .replace(/\u202f/g, "\ue001")
    .replace(/\s+/g, " ")
    .replace(/\ue000/g, "\u00a0")
    .replace(/\ue001/g, "\u202f")
    .trim();
}

function normalizeBinaryOperatorSpacing(text) {
  const protectedText = String(text || "").replace(
    /\b(\d{4})-(\d{1,2})-(\d{1,2})\b/g,
    "$1\ue010$2\ue010$3"
  );
  const characters = Array.from(protectedText);
  const binaryOperators = new Set([
    "+", "＋", "-", "－", "−", "±", "×", "÷", "∕", "·",
    "=", "＝", "≠", "≈", "≡", "≌", "≒", "∽", "∝",
    "<", ">", "＜", "＞", "≤", "≥", "≦", "≧", "≮", "≯",
    "∈", "∪", "∩", "∧", "∨", "⊕", "∶", "∷", "∥", "⊥", "∣", "∤",
    "←", "↑", "→", "↓", "↖", "↗", "↘", "↙"
  ]);
  const contextualBinaryOperators = new Set([
    "□", "○", "❍", "★", "☆", "◇", "◆", "※", "θ", "⊙", "⊗"
  ]);
  const unaryContext = new Set([
    "(", "（", "[", "［", "{", "｛",
    ...binaryOperators,
    ...contextualBinaryOperators,
    ",", "，", ":", "：", ";", "；"
  ]);
  const result = [];

  function previousNonSpaceIndex(index) {
    for (let cursor = index - 1; cursor >= 0; cursor--) {
      if (
        !/\s/.test(characters[cursor]) &&
        !isExplicitItalicControlCharacter(characters[cursor])
      ) {
        return cursor;
      }
    }
    return -1;
  }

  function previousNonSpace(index) {
    const cursor = previousNonSpaceIndex(index);
    return cursor >= 0 ? characters[cursor] : "";
  }

  function nextNonSpace(index) {
    for (let cursor = index + 1; cursor < characters.length; cursor++) {
      if (
        !/\s/.test(characters[cursor]) &&
        !isExplicitItalicControlCharacter(characters[cursor])
      ) {
        return characters[cursor];
      }
    }
    return "";
  }

  for (let index = 0; index < characters.length; index++) {
    const char = characters[index];

    if (
      !binaryOperators.has(char) &&
      !contextualBinaryOperators.has(char)
    ) {
      result.push(char);
      continue;
    }

    const previous = previousNonSpace(index);
    const next = nextNonSpace(index);
    const isContextualBinary = contextualBinaryOperators.has(char);
    const hasMathOperands =
      /[A-Za-z0-9０-９α-ωΑ-Ω]/.test(previous) &&
      /[A-Za-z0-9０-９α-ωΑ-Ω]/.test(next);

    if (isContextualBinary && !hasMathOperands) {
      result.push(char);
      continue;
    }

    const isSign = ["+", "＋", "-", "－", "−", "±"].includes(char);
    const isUnary =
      isSign &&
      (!previous || unaryContext.has(previous));
    const normalizedOperatorMap = {
      "-": "−",
      "－": "−",
      "−": "−",
      "＋": "+",
      "＝": "=",
      "＜": "<",
      "＞": ">"
    };
    const normalizedOperator = normalizedOperatorMap[char] || char;

    if (
      char === "∶" &&
      isDigitCharacter(previous) &&
      isDigitCharacter(next)
    ) {
      while (result.length && /\s/.test(result[result.length - 1])) {
        result.pop();
      }
      result.push("∶");

      while (
        index + 1 < characters.length &&
        /\s/.test(characters[index + 1])
      ) {
        index += 1;
      }
      continue;
    }

    if (isUnary || !previous || !next) {
      result.push(normalizedOperator);
      continue;
    }

    while (result.length && /\s/.test(result[result.length - 1])) {
      result.pop();
    }

    const previousIndex = previousNonSpaceIndex(index);
    const previousIsItalic =
      previousIndex >= 0 &&
      (
        isCharacterExplicitlyItalic(characters, previousIndex) ||
        isAngleFollowingLatinLetter(characters, previousIndex) ||
        isGeometryContextLatinLetter(characters, previousIndex) ||
        isMathVariableLatinLetter(characters, previousIndex)
      );
    const leftSpacing = previousIsItalic
      ? ["\u202f", "\u202f"]
      : ["\u202f"];

    result.push(...leftSpacing, normalizedOperator, "\u202f");

    while (
      index + 1 < characters.length &&
      /\s/.test(characters[index + 1])
    ) {
      index += 1;
    }
  }

  return result.join("").replace(/\ue010/g, "-");
}

function protectInlineMathGroups(text) {
  const han = "\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff";

  return String(text || "")
    .replace(
      new RegExp(`([${han}])\\s+(?=[0-9０-９])`, "g"),
      "$1"
    )
    .replace(
      new RegExp(`([0-9０-９])\\s+(?=[${han}])`, "g"),
      "$1"
    )
    .replace(
      /([0-9０-９])\s+(?=(?:mm|cm|dm|km|mg|kg|mL|ml|L|l|m|g)(?:²|³)?(?:\b|$))/g,
      "$1"
    )
    .replace(
      /([0-9０-９])\s+(?=[%％‰°′″℃])/g,
      "$1"
    );
}

function isUnsafeMathLineBreak(text, index) {
  const before = text[index - 1] || "";
  const after = text[index] || "";

  if (
    before === "\u00a0" ||
    after === "\u00a0" ||
    before === "\u202f" ||
    after === "\u202f"
  ) {
    return true;
  }
  if (isLatinLetter(before) && isLatinLetter(after)) return true;
  if (
    (isGreekLowercase(before) || isGreekUppercase(before)) &&
    (isGreekLowercase(after) || isGreekUppercase(after))
  ) {
    return true;
  }
  if (isDigitCharacter(before) && isDigitCharacter(after)) return true;
  if (
    (isDigitCharacter(before) && isHanCharacter(after)) ||
    (isHanCharacter(before) && isDigitCharacter(after))
  ) {
    return true;
  }
  if (
    isDigitCharacter(before) &&
    /^(?:mm|cm|dm|km|mg|kg|mL|ml|L|l|m|g)(?:²|³)?(?:\b|$)/.test(
      text.slice(index)
    )
  ) {
    return true;
  }
  if (
    ["∠", "△", "⊙", "⌒"].includes(before) &&
    isLatinLetter(after)
  ) {
    return true;
  }
  if (
    (isLatinLetter(before) || isGreekLowercase(before)) &&
    isMathOperatorCharacter(after)
  ) {
    return true;
  }
  if (
    isMathOperatorCharacter(before) &&
    (isLatinLetter(after) || isGreekLowercase(after))
  ) {
    return true;
  }
  if (["/", "∕"].includes(before) || ["/", "∕"].includes(after)) return true;
  if (before === "." && isDigitCharacter(after)) return true;
  if (
    (isDigitCharacter(before) || isLatinLetter(before)) &&
    /[.%％‰°′″⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ]/.test(after)
  ) {
    return true;
  }
  if (/[°′″]/.test(before) && isDigitCharacter(after)) return true;

  return false;
}

function isHanCharacter(char) {
  const codePoint = char.codePointAt(0);
  return (
    (codePoint >= 0x3400 && codePoint <= 0x4dbf) ||
    (codePoint >= 0x4e00 && codePoint <= 0x9fff) ||
    (codePoint >= 0xf900 && codePoint <= 0xfaff) ||
    (codePoint >= 0x20000 && codePoint <= 0x323af)
  );
}

function isDigitCharacter(char) {
  if (!char) return false;
  const codePoint = char.codePointAt(0);
  return (
    (codePoint >= 0x30 && codePoint <= 0x39) ||
    (codePoint >= 0xff10 && codePoint <= 0xff19)
  );
}

function isExplicitItalicControlCharacter(char) {
  return (
    char === EXPLICIT_ITALIC_START ||
    char === EXPLICIT_ITALIC_END
  );
}

function isCharacterExplicitlyItalic(characters, index) {
  let depth = 0;

  for (let cursor = 0; cursor <= index; cursor++) {
    if (characters[cursor] === EXPLICIT_ITALIC_START) {
      depth += 1;
    } else if (characters[cursor] === EXPLICIT_ITALIC_END) {
      depth = Math.max(0, depth - 1);
    }
  }

  return depth > 0;
}

function isGreekLowercase(char) {
  const codePoint = char.codePointAt(0);
  return codePoint >= 0x03b1 && codePoint <= 0x03c9;
}

function isGreekUppercase(char) {
  const codePoint = char.codePointAt(0);
  return codePoint >= 0x0391 && codePoint <= 0x03a9;
}

function isRomanNumeralCharacter(char) {
  const codePoint = char.codePointAt(0);
  return codePoint >= 0x2160 && codePoint <= 0x217f;
}

function isCircledDigitCharacter(char) {
  const codePoint = char.codePointAt(0);
  return codePoint >= 0x2460 && codePoint <= 0x2469;
}

function isLatinLetter(char) {
  const codePoint = char.codePointAt(0);
  return (
    (codePoint >= 0x41 && codePoint <= 0x5a) ||
    (codePoint >= 0x61 && codePoint <= 0x7a) ||
    (codePoint >= 0x00c0 && codePoint <= 0x024f)
  );
}

function isMathOperatorCharacter(char) {
  return new Set([
    "+", "＋", "-", "－", "−", "±", "×", "÷", "∕", "·",
    "=", "＝", "≠", "≈", "≡", "≌", "≒", "∽", "∝",
    "<", ">", "＜", "＞", "≤", "≥", "≦", "≧", "≮", "≯",
    "∈", "∪", "∩", "∧", "∨", "⊕", "⊗", "⊥", "∥",
    "□", "○", "❍", "★", "☆", "◇", "◆", "※",
    "√", "∑", "∏", "∫", "∮",
    "∣", "∤", "∶", "∷", "∴", "∵",
    "←", "↑", "→", "↓", "↖", "↗", "↘", "↙"
  ]).has(char);
}

function isDecimalPointCharacter(characters, index) {
  const char = characters[index];

  return (
    (char === "." || char === "．") &&
    index > 0 &&
    index < characters.length - 1 &&
    isDigitCharacter(characters[index - 1]) &&
    isDigitCharacter(characters[index + 1])
  );
}

function isTimeColonCharacter(characters, index) {
  const char = characters[index];

  return (
    char === ":" &&
    index > 0 &&
    index < characters.length - 1 &&
    isDigitCharacter(characters[index - 1]) &&
    isDigitCharacter(characters[index + 1])
  );
}

function isAngleUnitCharacter(characters, index) {
  const char = characters[index];

  if (!["°", "′", "″"].includes(char)) {
    return false;
  }

  const before = characters[index - 1] || "";
  const after = characters[index + 1] || "";
  return isDigitCharacter(before) || isDigitCharacter(after);
}

function isPercentUnitCharacter(characters, index) {
  const char = characters[index];

  if (!["%", "‰"].includes(char)) {
    return false;
  }

  return isDigitCharacter(characters[index - 1] || "");
}

function isUnitLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  let start = index;
  let end = index + 1;
  const isUnitTokenCharacter = char => {
    return isLatinLetter(char) || char === "/" || char === "∕";
  };

  while (
    start > 0 &&
    isUnitTokenCharacter(characters[start - 1])
  ) {
    start -= 1;
  }
  while (
    end < characters.length &&
    isUnitTokenCharacter(characters[end])
  ) {
    end += 1;
  }

  const token = characters.slice(start, end).join("");
  const knownUnits = new Set([
    "mm", "cm", "dm", "m", "km",
    "mg", "g", "kg", "t",
    "mL", "ml", "L", "l",
    "ms", "s", "min", "h", "d",
    "m/s", "km/h",
    "a", "ha", "W", "kW", "kWh",
    "V", "A", "Pa", "kPa"
  ]);

  if (!knownUnits.has(token)) {
    return false;
  }

  const before = characters
    .slice(0, start)
    .join("")
    .replace(/\s+$/, "");
  const after = characters
    .slice(end)
    .join("")
    .replace(/^\s+/, "");
  const hasUnitCue =
    token.includes("/") ||
    token.length > 1 ||
    /[0-9０-９]$/.test(before) ||
    /(?:单位|长度|宽度|高度|周长|面积|体积|质量|重量|速度|时间|路程|距离|每)\s*$/.test(
      before
    ) ||
    /^(?:[²³]|\^\{?[23]\}?)/.test(after);

  return hasUnitCue;
}

function getCharacterFont(char, fonts) {
  if (isHanCharacter(char) || /\s/.test(char)) {
    return fonts.content;
  }

  if (
    isLatinLetter(char) ||
    isDigitCharacter(char) ||
    isRomanNumeralCharacter(char)
  ) {
    return fonts.latin;
  }

  if (char === "π") {
    return fonts.latin;
  }

  if (isGreekLowercase(char)) {
    return fonts.latinItalic;
  }

  if (isGreekUppercase(char)) {
    return fonts.operator || fonts.symbol;
  }

  if (isCircledDigitCharacter(char)) {
    return fonts.symbol;
  }

  if (isMathOperatorCharacter(char)) {
    return fonts.operator || fonts.symbol;
  }

  return fonts.symbol;
}

function isAngleFollowingLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  let cursor = index - 1;

  while (cursor >= 0 && isLatinLetter(characters[cursor])) {
    cursor -= 1;
  }

  while (cursor >= 0 && /\s/.test(characters[cursor])) {
    cursor -= 1;
  }

  return cursor >= 0 && characters[cursor] === "∠";
}

function isTriangleFollowingLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  let cursor = index - 1;

  while (cursor >= 0 && isLatinLetter(characters[cursor])) {
    cursor -= 1;
  }

  return cursor >= 0 && characters[cursor] === "△";
}

function isGeometryMarkerFollowingLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  let cursor = index - 1;

  while (cursor >= 0 && isLatinLetter(characters[cursor])) {
    cursor -= 1;
  }

  while (cursor >= 0 && /\s/.test(characters[cursor])) {
    cursor -= 1;
  }

  return (
    cursor >= 0 &&
    ["∠", "△", "⊙", "⌒"].includes(characters[cursor])
  );
}

function isPrimedGeometryLatinLetter(characters, index) {
  const char = characters[index];

  return (
    /^[A-Z]$/.test(char || "") &&
    ["′", "'"].includes(characters[index + 1] || "")
  );
}

function isPrimedGeometryPrime(characters, index) {
  return (
    characters[index] === "′" &&
    /^[A-Z]$/.test(characters[index - 1] || "")
  );
}

function getLatinRunRange(characters, index) {
  let start = index;
  let end = index + 1;

  while (start > 0 && isLatinLetter(characters[start - 1])) {
    start -= 1;
  }

  while (end < characters.length && isLatinLetter(characters[end])) {
    end += 1;
  }

  return {
    start,
    end,
    value: characters.slice(start, end).join("")
  };
}

function isGeometryContextLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  const run = getLatinRunRange(characters, index);

  // 小学几何标识以 1—3 个大写字母为主，直线也可能使用单个小写字母。
  if (!/^(?:[A-Z]{1,3}|[a-z])$/.test(run.value)) {
    return false;
  }

  const before = characters
    .slice(Math.max(0, run.start - 18), run.start)
    .join("");
  const after = characters
    .slice(run.end, Math.min(characters.length, run.end + 28))
    .join("");

  const hasLeadingGeometryTerm =
    /(?:点|顶点|端点|线段|射线|直线|边|圆心|半径|直径|弦)\s*$/.test(before);
  const hasGeometryRelation =
    /^\s*(?:是|为|表示|=|∥|⊥)/.test(after) &&
    /(?:∠|角|平分线|线段|射线|直线|垂直|平行|圆|半径|直径)/.test(
      `${before}${after}`
    );
  const touchesGeometryOperator =
    /(?:∥|⊥)\s*$/.test(before) || /^\s*(?:∥|⊥)/.test(after);

  return hasLeadingGeometryTerm || hasGeometryRelation || touchesGeometryOperator;
}

function isMathVariableLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  const run = getLatinRunRange(characters, index);

  if (!/^[A-Za-z]$/.test(run.value)) {
    return false;
  }

  const before = characters.slice(0, run.start).join("").replace(/\s+$/, "");
  const after = characters.slice(run.end).join("").replace(/^\s+/, "");
  const mathOperator =
    /[=＝≠≈≡≌≒+＋\-－−±×÷∕·*/<>＜＞≤≥≦≧∈∪∩∧∨∥⊥∣∤⊕⊗□○❍★☆◇◆※θ^]/;

  return (
    mathOperator.test(before.slice(-1)) ||
    mathOperator.test(after.slice(0, 1))
  );
}

function isRepeatedMathVariableLatinLetter(characters, index) {
  if (!isLatinLetter(characters[index])) {
    return false;
  }

  const currentRun = getLatinRunRange(characters, index);
  if (!/^[A-Za-z]$/.test(currentRun.value)) {
    return false;
  }

  const variable = currentRun.value;
  const strongMathOperator =
    /[=＝≠≈≡≌≒+＋\-－−±×÷·<>＜＞≤≥≦≧∈∣∤∥⊥^]/;

  for (let cursor = 0; cursor < characters.length; cursor++) {
    if (characters[cursor] !== variable) {
      continue;
    }

    const run = getLatinRunRange(characters, cursor);
    if (run.start !== cursor || run.value !== variable) {
      continue;
    }

    const before = characters
      .slice(0, run.start)
      .join("")
      .replace(/\s+$/, "");
    const after = characters
      .slice(run.end)
      .join("")
      .replace(/^\s+/, "");

    if (
      strongMathOperator.test(before.slice(-1)) ||
      strongMathOperator.test(after.slice(0, 1)) ||
      isGeometryMarkerFollowingLatinLetter(characters, cursor) ||
      isPrimedGeometryLatinLetter(characters, cursor) ||
      isGeometryContextLatinLetter(characters, cursor) ||
      isFunctionContextLatinLetter(characters, cursor)
    ) {
      return true;
    }
  }

  return false;
}

function isFunctionContextLatinLetter(characters, index) {
  if (!/[a-z]/.test(characters[index] || "")) {
    return false;
  }

  const run = getLatinRunRange(characters, index);

  if (!/^[a-z]$/.test(run.value)) {
    return false;
  }

  const before = characters.slice(0, run.start).join("").replace(/\s+$/, "");
  const after = characters.slice(run.end).join("").replace(/^\s+/, "");

  return (
    after.startsWith("(") ||
    (
      before.endsWith("(") &&
      (
        after.startsWith(")") ||
        /^[,，]/.test(after)
      )
    ) ||
    (
      /[(（,，]\s*$/.test(before) &&
      /^\s*[,，)）]/.test(after)
    )
  );
}

function isFunctionParenthesisCharacter(characters, index) {
  const char = characters[index];

  if (char === "(") {
    const before = characters.slice(0, index).join("").replace(/\s+$/, "");
    return /[a-z]$/.test(before);
  }

  if (char !== ")") {
    return false;
  }

  let depth = 0;
  for (let cursor = index - 1; cursor >= 0; cursor--) {
    if (characters[cursor] === ")") {
      depth += 1;
    } else if (characters[cursor] === "(") {
      if (depth > 0) {
        depth -= 1;
        continue;
      }

      const before = characters
        .slice(0, cursor)
        .join("")
        .replace(/\s+$/, "");
      return /[a-z]$/.test(before);
    }
  }

  return false;
}

function getContextualCharacterFont(characters, index, fonts) {
  if (isDecimalPointCharacter(characters, index)) {
    return fonts.latin;
  }

  if (isTimeColonCharacter(characters, index)) {
    return fonts.latin;
  }

  if (isAngleUnitCharacter(characters, index)) {
    return fonts.latin;
  }

  if (isPercentUnitCharacter(characters, index)) {
    return fonts.latin;
  }

  if (isUnitLatinLetter(characters, index)) {
    return fonts.latin;
  }

  if (isPrimedGeometryPrime(characters, index)) {
    return fonts.latin;
  }

  if (isFunctionParenthesisCharacter(characters, index)) {
    return fonts.latin;
  }

  if (
    isGeometryMarkerFollowingLatinLetter(characters, index) ||
    isPrimedGeometryLatinLetter(characters, index) ||
    isGeometryContextLatinLetter(characters, index) ||
    isMathVariableLatinLetter(characters, index) ||
    isRepeatedMathVariableLatinLetter(characters, index) ||
    isFunctionContextLatinLetter(characters, index)
  ) {
    return fonts.latinItalic;
  }

  return getCharacterFont(characters[index], fonts);
}

function sameFont(a, b) {
  return a.family === b.family && a.style === b.style;
}

function applyCharacterFonts(textNode, text, fonts) {
  const value = String(text || "");

  if (!value) return;

  const characters = Array.from(value);
  let segmentStart = 0;
  let currentOffset = characters[0].length;
  let segmentFont = getContextualCharacterFont(characters, 0, fonts);

  for (let index = 1; index < characters.length; index++) {
    const nextFont = getContextualCharacterFont(characters, index, fonts);

    if (!sameFont(segmentFont, nextFont)) {
      textNode.setRangeFontName(segmentStart, currentOffset, segmentFont);
      segmentStart = currentOffset;
      segmentFont = nextFont;
    }

    currentOffset += characters[index].length;
  }

  textNode.setRangeFontName(segmentStart, value.length, segmentFont);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function createMeasurementText(text, fontSize, fonts) {
  const temp = figma.createText();
  temp.fontName = fonts.content;
  temp.fontSize = fontSize;
  temp.characters = String(text || "");
  applyCharacterFonts(temp, text, fonts);
  temp.textAutoResize = "WIDTH_AND_HEIGHT";
  return temp;
}

function measureRealTextWidth(text, fontSize, fonts) {
  const temp = createMeasurementText(text, fontSize, fonts);
  const w = temp.width;
  temp.remove();
  return w;
}

function measureRealTextBlock(text, fontSize, fonts) {
  const temp = createMeasurementText(text, fontSize, fonts);
  temp.lineHeight = {
  unit: "PERCENT",
  value: VISUAL_STYLE.lineHeightPercent
};

  const result = {
    width: temp.width,
    height: temp.height
  };

  temp.remove();
  return result;
}

function parseCSV(csvText) {
  const cleanText = (csvText || "").replace(/^\uFEFF/, "").trim();

  if (!cleanText) return [];

  const lines = splitCSVLines(cleanText);

  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map(header => {
    return normalizeHeader(header);
  });

  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);

    if (values.length === 1 && values[0].trim() === "") continue;

    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] ? values[index].trim() : "";
    });

    for (const field of ["QUESTION", "A", "B", "C", "D"]) {
      row[field] = insertExplicitItalicControls(
        row[field],
        row[`${field}ITALIC`]
      );
    }

    if (
      row.QUESTION || row.A || row.B || row.C || row.D ||
      row.LIGHTBULB || row.NEGATIVEFEEDBACK || row.NEGATIVE_FEEDBACK ||
      row["小灯泡"] || row["负反馈"]
    ) {
      rows.push(row);
    }
  }

  return rows;
}

function parseExplicitItalicRanges(value) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(range => {
        return (
          Array.isArray(range) &&
          range.length === 2 &&
          Number.isInteger(range[0]) &&
          Number.isInteger(range[1]) &&
          range[0] >= 0 &&
          range[1] > range[0]
        );
      })
      .map(range => [range[0], range[1]]);
  } catch (error) {
    return [];
  }
}

function insertExplicitItalicControls(text, metadata) {
  let result = String(text || "");
  const ranges = parseExplicitItalicRanges(metadata)
    .filter(range => range[0] < result.length)
    .map(range => [
      range[0],
      Math.min(range[1], result.length)
    ])
    .sort((a, b) => b[0] - a[0]);

  for (const [start, end] of ranges) {
    result =
      result.slice(0, start) +
      EXPLICIT_ITALIC_START +
      result.slice(start, end) +
      EXPLICIT_ITALIC_END +
      result.slice(end);
  }

  return result;
}

function normalizeHeader(header) {
  let value = header.trim();

  if (value.startsWith("#")) {
    value = value.slice(1);
  }

  value = value.toUpperCase();

  return value;
}

function splitCSVLines(text) {
  const lines = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && nextChar === '"') {
      current += '"';
      i++;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      current += char;
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (current.trim() !== "") {
        lines.push(current);
      }

      current = "";

      if (char === "\r" && nextChar === "\n") {
        i++;
      }

      continue;
    }

    current += char;
  }

  if (current.trim() !== "") {
    lines.push(current);
  }

  return lines;
}

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"' && nextChar === '"') {
      current += '"';
      i++;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      result.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current);

  return result;
}
function normalizeLayerPrefix(value) {
  return String(value || "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function normalizeLayerType(value) {
  const normalized = String(value || "")
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  // 图层类型保持小写，但末尾的选项字母 A/B/C/D 使用大写
  // 例如：
  // Option_A -> option-A
  // Label_Badge_C -> label-badge-C
  // Text_D -> text-D
  return normalized.replace(/-([abcd])$/, function (_, letter) {
    return `-${letter.toUpperCase()}`;
  });
}

function withNamePrefix(prefix, baseName) {
  const cleanPrefix = normalizeLayerPrefix(prefix);
  const cleanBaseName = normalizeLayerType(baseName);

  if (!cleanPrefix) {
    return cleanBaseName;
  }

  if (!cleanBaseName) {
    return cleanPrefix;
  }

  return `${cleanPrefix}-${cleanBaseName}`;
}

function hasImageData(imagesForThisRow) {
  return Boolean(
    imagesForThisRow &&
    (
      imagesForThisRow.A ||
      imagesForThisRow.B ||
      imagesForThisRow.C ||
      imagesForThisRow.D
    )
  );
}
function getRowNamePrefix(rowData, imagesForThisRow, settings) {
  const csvPrefix =
    rowData.NAMEPREFIX ||
    rowData.PREFIX ||
    rowData.NAMINGPREFIX ||
    "";

  const imageGroupPrefix =
    imagesForThisRow && imagesForThisRow.groupId
      ? imagesForThisRow.groupId
      : "";

  const unifiedPrefix = settings.namePrefix || "";

  // 图片批量导入时：
  // 只允许使用图片生成出来的 groupId。
  // 这个 groupId 在 ui.html 里已经处理过：
  // 1. 如果统一命名前缀不为空，groupId = 统一命名前缀递增后的结果
  // 2. 如果统一命名前缀为空，groupId = 图片文件名本身前缀
  // 所以这里不能再让 csvPrefix 抢优先级。
  if (hasImageData(imagesForThisRow)) {
    return imageGroupPrefix || unifiedPrefix || "";
  }

  // 纯 Word / CSV 文本导入时：
  // 优先使用 CSV 里的 NamePrefix。
  // 如果 CSV 没有 NamePrefix，再用统一命名前缀。
  return csvPrefix || unifiedPrefix || "";
}

function walkSceneNode(node, visitor) {
  visitor(node);

  if ("children" in node) {
    for (const child of node.children) {
      walkSceneNode(child, visitor);
    }
  }
}

function findGeneratedOptionRoot() {
  const selection = figma.currentPage.selection || [];

  for (const node of selection) {
    if (node && node.name === "generated-option-groups") {
      return node;
    }
  }

  return figma.currentPage.findOne(function (node) {
    return node.name === "generated-option-groups";
  });
}

function getMortonOptionLetter(name) {
  const match = String(name || "").match(/-option-([A-D])$/i);
  return match ? match[1].toUpperCase() : "";
}

function getMortonAssetInfo(name) {
  const optionLetter = getMortonOptionLetter(name);

  if (optionLetter) {
    return {
      type: "option",
      letter: optionLetter
    };
  }

  if (/-question$/i.test(String(name || ""))) {
    return {
      type: "question",
      letter: ""
    };
  }

  if (/(?:-lightbulb-\d+|-小灯泡\d+)$/i.test(String(name || ""))) {
    return {
      type: "lightbulb",
      letter: ""
    };
  }

  if (/(?:-negative-feedback-\d+|-负反馈\d+)$/i.test(String(name || ""))) {
    return {
      type: "negative-feedback",
      letter: ""
    };
  }

  return null;
}

function compareMortonAssetNames(a, b) {
  const nameA = a.name || "";
  const nameB = b.name || "";

  return nameA.localeCompare(nameB, undefined, {
    numeric: true,
    sensitivity: "base"
  });
}

async function handleExportMortonOptionLayers() {
  try {
    const root = findGeneratedOptionRoot();

    if (!root) {
      figma.ui.postMessage({
        type: "morton-export-result",
        success: false,
        error: "未找到 generated-option-groups。请先生成选项组，或选中 generated-option-groups 后再上传。"
      });
      return;
    }

    const assetNodes = [];

    walkSceneNode(root, function (node) {
      const assetInfo = getMortonAssetInfo(node.name);

      if (assetInfo && "exportAsync" in node) {
        assetNodes.push({
          node,
          letter: assetInfo.letter,
          assetType: assetInfo.type,
          name: node.name
        });
      }
    });

    assetNodes.sort(compareMortonAssetNames);

    if (assetNodes.length === 0) {
      figma.ui.postMessage({
        type: "morton-export-result",
        success: false,
        error: "没有找到可导出的题干、选项、小灯泡或负反馈图层。"
      });
      return;
    }

    const assets = [];

    for (const item of assetNodes) {
      const bytes = await item.node.exportAsync({
        format: "PNG",
        constraint: {
          type: "SCALE",
          value: 1
        }
      });

      assets.push({
        name: item.name,
        letter: item.letter,
        assetType: item.assetType,
        fileName: `${item.name}.png`,
        bytes: Array.from(bytes)
      });
    }

    figma.ui.postMessage({
      type: "morton-export-result",
      success: true,
      assets
    });
  } catch (error) {
    console.error(error);
    figma.ui.postMessage({
      type: "morton-export-result",
      success: false,
      error: `导出图层失败：${error && error.message ? error.message : error}`
    });
  }
}

async function handleRegisterMortonMaterials(msg) {
  const parentId = String(msg.parentId || "").trim();
  const authorization = String(msg.authorization || "").trim();
  const cookie = String(msg.cookie || "").trim();
  const records = Array.isArray(msg.records) ? msg.records : [];

  if (!parentId) {
    figma.ui.postMessage({
      type: "morton-register-result",
      success: false,
      error: "请填写素材文件夹 ID。"
    });
    return;
  }

  if (!authorization || !cookie) {
    figma.ui.postMessage({
      type: "morton-register-result",
      success: false,
      error: "请填写 Authorization 和 Cookie。"
    });
    return;
  }

  if (records.length === 0) {
    figma.ui.postMessage({
      type: "morton-register-result",
      success: false,
      error: "没有可登记的素材记录。"
    });
    return;
  }

  try {
    const materialPayload = records.map(function (record) {
      return {
        url: record.url,
        name: record.name,
        type: "IMAGE",
        general: 0,
        grades: [],
        phases: [],
        fixedLabels: [],
        customLabels: [],
        parentId
      };
    });

    const createResp = await fetch("https://tms-mx.xueqiulearning.com/merton-backend/material/createMaterial", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": authorization,
        "Content-Type": "application/json;charset=UTF-8",
        "Cookie": cookie
      },
      body: JSON.stringify(materialPayload)
    });

    const createText = await createResp.text();
    let createData = null;

    try {
      createData = createText ? JSON.parse(createText) : null;
    } catch (error) {
      createData = {
        raw: createText
      };
    }

    if (!createResp.ok || !createData || createData.code !== 200) {
      figma.ui.postMessage({
        type: "morton-register-result",
        success: false,
        error: `登记莫顿素材失败：HTTP ${createResp.status}，${createData && createData.message ? createData.message : createText}`
      });
      return;
    }

    const listUrl = `https://tms-mx.xueqiulearning.com/merton-backend/material/searchMaterials?parentId=${encodeURIComponent(parentId)}&pageNum=1&pageSize=200`;
    const listResp = await fetch(listUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": authorization,
        "Cookie": cookie
      }
    });

    const listText = await listResp.text();
    let listData = null;

    try {
      listData = listText ? JSON.parse(listText) : null;
    } catch (error) {
      listData = {
        raw: listText
      };
    }

    const remoteRecords =
      listData &&
      listData.data &&
      Array.isArray(listData.data.records)
        ? listData.data.records
        : [];

    const registered = records.map(function (record) {
      const matched = remoteRecords.find(function (remote) {
        return String(remote.name || "") === String(record.name || "");
      });

      return {
        ...record,
        materialId: matched ? matched.id : "",
        confirmedUrl: matched ? matched.url : "",
        confirmed: Boolean(matched)
      };
    });

    figma.ui.postMessage({
      type: "morton-register-result",
      success: true,
      createData,
      listData,
      assets: registered
    });

    figma.notify(`已上传并登记 ${registered.length} 张素材。`);
  } catch (error) {
    console.error(error);
    figma.ui.postMessage({
      type: "morton-register-result",
      success: false,
      error: `登记莫顿素材异常：${error && error.message ? error.message : error}`
    });
  }
}

async function handleCreateMortonFolder(msg) {
  const folderName = String(msg.folderName || "").trim();
  const authorization = String(msg.authorization || "").trim();
  const cookie = String(msg.cookie || "").trim();

  if (!folderName) {
    figma.ui.postMessage({
      type: "morton-folder-created",
      success: false,
      error: "请填写新文件夹名称。"
    });
    return;
  }

  if (!authorization || !cookie) {
    figma.ui.postMessage({
      type: "morton-folder-created",
      success: false,
      error: "请填写 Authorization 和 Cookie。"
    });
    return;
  }

  try {
    const folderPayload = {
      type: "DIRECTORY",
      folderName,
      grades: [],
      phases: [],
      customLabels: [],
      fixedLabels: [],
      materialDTOList: []
    };

    const createResp = await fetch("https://tms-mx.xueqiulearning.com/merton-backend/material/createFolder", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": authorization,
        "Content-Type": "application/json;charset=UTF-8",
        "Cookie": cookie
      },
      body: JSON.stringify(folderPayload)
    });

    const createText = await createResp.text();
    let createData = null;

    try {
      createData = createText ? JSON.parse(createText) : null;
    } catch (error) {
      createData = {
        raw: createText
      };
    }

    if (!createResp.ok || !createData || createData.code !== 200) {
      figma.ui.postMessage({
        type: "morton-folder-created",
        success: false,
        error: `创建文件夹失败：HTTP ${createResp.status}，${createData && createData.message ? createData.message : createText}`
      });
      return;
    }

    const listUrl = "https://tms-mx.xueqiulearning.com/merton-backend/material/searchMaterials?type=DIRECTORY&pageNum=1&pageSize=24&general=0";
    const listResp = await fetch(listUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": authorization,
        "Cookie": cookie
      }
    });

    const listText = await listResp.text();
    let listData = null;

    try {
      listData = listText ? JSON.parse(listText) : null;
    } catch (error) {
      listData = {
        raw: listText
      };
    }

    const folders =
      listData &&
      listData.data &&
      Array.isArray(listData.data.records)
        ? listData.data.records
        : [];

    const matched = folders.find(function (folder) {
      return String(folder.name || "") === folderName && String(folder.type || "") === "DIRECTORY";
    });

    if (!matched || !matched.id) {
      figma.ui.postMessage({
        type: "morton-folder-created",
        success: false,
        error: "文件夹已创建，但在首页文件夹列表里没有找到新文件夹 ID。请刷新莫顿素材库确认，或改用已有文件夹 ID 上传。",
        createData,
        listData
      });
      return;
    }

    figma.ui.postMessage({
      type: "morton-folder-created",
      success: true,
      folderId: String(matched.id),
      folderName,
      createData,
      listData
    });

    figma.notify(`已创建莫顿素材文件夹：${folderName}`);
  } catch (error) {
    console.error(error);
    figma.ui.postMessage({
      type: "morton-folder-created",
      success: false,
      error: `创建文件夹异常：${error && error.message ? error.message : error}`
    });
  }
}


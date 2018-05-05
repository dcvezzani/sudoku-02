curl https://www.sudokuweb.org/ | pup 'body table tr td json{}' | jq 'map(.children[0] | if .class == "true" then "s:\(.text)" else "g:\(.text)" end)'

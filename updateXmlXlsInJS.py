fileXmlJs = open("demo.xml.js", 'w', encoding="utf-8")
fileXmlJs.write("var xml = '\\" + "\n")
with open("demo.xml", 'r', encoding="utf-8") as f:
	for line in f:
		fileXmlJs.write(line.replace("\n", "") + "\\\n")
fileXmlJs.write("';")
fileXmlJs.close()

fileXslJs = open("demo.xsl.js", 'w', encoding="utf-8")
fileXslJs.write("var xsl = '\\" + "\n")
with open("demo.xsl", 'r', encoding="utf-8") as f:
	for line in f:
		fileXslJs.write(line.replace("\n", "") + "\\\n")
fileXslJs.write("';")
fileXslJs.close()
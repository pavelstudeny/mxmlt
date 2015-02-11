var xsl = '\
<?xml version="1.0" ?>\
\
<xsl:stylesheet\
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"\
	version="1.0">\
\
	<xsl:output method="html" indent="no" encoding="UTF-8" standalone="no"\
	doctype-system="http://www.musicxml.org/dtds/partwise.dtd"\
	doctype-public="-//Recordare//DTD MusicXML 0.6c Partwise//EN" />\
\
	<xsl:strip-space elements="*"/>\
\
	<!--default template that just copies all nodes-->\
	<xsl:template match="node()|@*">\
		<!--%Unhandled:-<xsl:value-of select="name()"/>\
<xsl:text> [</xsl:text>\
<xsl:apply-templates/>\
<xsl:text>] </xsl:text>-->\
	</xsl:template>\
\
	<xsl:template match="/">\
		<xsl:apply-templates/>\
	</xsl:template>\
\
	<xsl:template match="score">\
		<xsl:value-of select="@name"/>\
		<xsl:apply-templates/>\
	</xsl:template>\
\
	<xsl:template match="score-partwise">\
		<xsl:apply-templates/>\
	</xsl:template>\
\
	<xsl:template match="part">\
		<xsl:apply-templates/>\
	</xsl:template>\
\
	<xsl:template match="measure/attributes">\
		\
		<!--\
		Clef\
		-->\
		<xsl:element name="span">\
			<xsl:attribute name="class">\
				<xsl:text>clef </xsl:text>\
				<xsl:value-of select = "clef/sign"/><xsl:value-of select = "clef/line"/>\
			</xsl:attribute>\
			<xsl:choose>\
				<xsl:when test="clef/sign = \'G\'">\
					<xsl:text>&#x1d11e;</xsl:text>\
				</xsl:when>\
				<xsl:when test="clef/sign = \'C\'">\
					<xsl:text>&#x1d121;</xsl:text>\
				</xsl:when>\
				<xsl:when test="clef/sign = \'F\'">\
					<xsl:text>&#x1d122;</xsl:text>\
				</xsl:when>\
			</xsl:choose>\
		</xsl:element>\
		\
		<!--\
		Time\
		-->\
		<span class="time">\
			<sup><span class="timeBeats"><xsl:value-of select="time/beats"/></span></sup>\
			<span class="timeSeparator"><xsl:text>/</xsl:text></span>\
			<sub><span class="timeBeatType"><xsl:value-of select="time/beat-type"/></span></sub>\
		</span>\
	</xsl:template>\
\
	<xsl:template match="measure">\
		<!-- Key sugs, timesigs, etc, appear to be contained inside measure.\
Dela with these first.\
-->\
		<xsl:apply-templates/>\
		<!--<xsl:text> | </xsl:text> end of bar-->\
	</xsl:template>\
\
	<xsl:template match="note">\
		<xsl:element name="span">\
			<xsl:attribute name="class">\
				<xsl:text>note </xsl:text>\
				<xsl:value-of select = "pitch/step"/><xsl:value-of select = "pitch/octave"/>\
				<xsl:text> </xsl:text>\
				<xsl:value-of select = "type"/>\
			</xsl:attribute>\
			<xsl:choose>\
				<xsl:when test = "type = \'long\'">\
					<xsl:text>|&#x1d15c;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'breve\'">\
					<xsl:text>&#x1d15c;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'whole\'">\
					<xsl:text>&#x1d15d;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'half\'">\
					<xsl:text>&#x1d15e;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'quarter\'">\
					<xsl:text>&#x1d15f;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'eighth\'">\
					<xsl:text>&#x1d160;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'16th\'">\
					<xsl:text>&#x1d160;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'32nd\'">\
					<xsl:text>&#x1d161;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'64th\'">\
					<xsl:text>&#x1d162;</xsl:text>\
				</xsl:when>\
				<xsl:when test = "type = \'128th\'">\
					<xsl:text>&#x1d163;</xsl:text>\
				</xsl:when>\
			</xsl:choose>\
		</xsl:element>\
\
	</xsl:template>\
\
</xsl:stylesheet>\
';
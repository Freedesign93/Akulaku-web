import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				website
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:description"} content={"welcome to my site"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} type={"image/x-icon"} />
		</Helmet>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6256c15f3331fc002027b49b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"6256c5019aab7c55b130c009"} />
		</RawHtml>
	</Theme>;
});
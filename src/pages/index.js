import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				website
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:description"} content={"welcome to my site"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" sm-padding="30px 0 30px 0" background="--color-dark">
			<Box
				margin="0px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 32px 0px"
				display="flex"
				flex-direction="row"
				align-items="center"
				sm-margin="0px 0px 10px 0px"
				justify-content="space-between"
				lg-align-items="center"
				lg-flex-direction="column"
				lg-justify-content="center"
			>
				<Text
					margin="0px 32px 0px 0px"
					font="--headline1"
					color="#ffffff"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-margin="0px 0px 12px 0px"
					flex="0 0 auto"
				>
					Comparison
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--lightD2"
					text-align="left"
					width="50%"
					md-width="100%"
					lg-width="100%"
					lg-text-align="center"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box width="100%" display="grid" grid-template-columns="repeat(4, 1fr)" grid-gap="32px">
				<Box display="flex">
					<Box
						display="flex"
						margin="0px 0px 0px 0px"
						flex-wrap="wrap"
						width="100%"
						padding="100px 0px 64px 0px"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						md-padding="92px 0px 64px 0px"
					>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 1
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 2
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 3
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 4
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 5
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 6
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 0px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 7
						</Text>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-primary"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Our company
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="rgba(247, 251, 255, 0.15)" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 1
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="rgba(247, 251, 255, 0.15)" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 2
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="--color-darkL1" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Button
			sm-letter-spacing="initial"
			sm-cursor="wait"
			sm-border-width="0 0 1px 0"
			sm-max-width="100%"
			sm-max-height="100%"
			sm-min-height="100%"
			sm-min-width="100%"
		>
			Button
		</Button>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6256c15f3331fc002027b49b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"6256c5019aab7c55b130c009"} />
		</RawHtml>
	</Theme>;
});
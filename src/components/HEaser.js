import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Link, Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "70px 0 70px 0",
	"quarkly-title": "Info",
	"lg-padding": "50px 0px 50px 0px",
	"md-padding": "25px 0px 25px 0px",
	"justify-content": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "40%",
			"display": "flex",
			"lg-width": "100%",
			"lg-order": "2",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"justify-content": "flex-start",
			"lg-align-items": "flex-start",
			"align-items": "flex-start",
			"padding": "0px 30px 0px 0px",
			"lg-padding": "0px 0px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"opacity": "0.6",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 6px 0px",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"children": "Team"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Who We Are"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "left",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/about",
			"text-decoration-line": "initial",
			"color": "--light",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"text-align": "center",
			"margin": "9px 0px 0px 0px",
			"background": "--color-primary",
			"hover-transform": "translateY(-4px)",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"children": "Read More"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "60%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"miniPk-width": "59%",
			"lg-width": "100%",
			"lg-order": "1",
			"lg-margin": "0px 0px 10px 0px",
			"quarkly-title": "Illustration"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat",
			"margin": "0px 0px 0px 0px",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {
			"margin": "80px -16px -16px -16px",
			"lg-margin": "50px -16px -16px -16px",
			"md-margin": "30px -16px -16px -16px"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "60%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"miniPk-width": "59%",
			"lg-width": "100%",
			"lg-margin": "0px 0px 10px 0px",
			"quarkly-title": "Illustration"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"lg-width": "100%"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat",
			"margin": "0px 0px 0px 0px",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "40%",
			"display": "flex",
			"lg-margin": "0px 0px 0px 0px",
			"lg-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"justify-content": "flex-start",
			"lg-align-items": "flex-start",
			"align-items": "flex-start",
			"padding": "0px 0px 0px 30px",
			"lg-padding": "0px 0px 0px 0px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"opacity": "0.6",
			"lg-margin": "0px 0px 6px 0px",
			"lg-text-align": "center",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"children": "expertise"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Why Choose Us"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "--darkL2",
			"opacity": "0.6",
			"sm-text-align": "left",
			"lg-text-align": "left",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/team",
			"text-decoration-line": "initial",
			"color": "--light",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"text-align": "center",
			"margin": "9px 0px 0px 0px",
			"background": "--color-primary",
			"hover-transform": "translateY(-4px)",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"children": "Read More"
		}
	},
	"stack2": {
		"kind": "Stack",
		"props": {
			"margin": "80px -16px -16px -16px",
			"lg-margin": "50px -16px -16px -16px",
			"md-margin": "30px -16px -16px -16px"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "40%",
			"display": "flex",
			"lg-width": "100%",
			"lg-order": "2",
			"lg-margin": "0px 0px 0px 0px",
			"box-sizing": "border-box"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"justify-content": "flex-start",
			"lg-align-items": "flex-start",
			"align-items": "flex-start",
			"box-sizing": "border-box",
			"padding": "0px 30px 0px 0px",
			"lg-padding": "0px 0px 0px 0px"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"opacity": "0.6",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 6px 0px",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"children": "CONTACTS"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-text-align": "left",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Where We Work"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "left",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/contact",
			"text-decoration-line": "initial",
			"color": "--light",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"text-align": "center",
			"margin": "9px 0px 0px 0px",
			"background": "--color-primary",
			"hover-transform": "translateY(-4px)",
			"children": "Read More"
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "60%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"miniPk-width": "59%",
			"lg-width": "100%",
			"lg-order": "1",
			"lg-margin": "0px 0px 10px 0px",
			"quarkly-title": "Illustration"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat",
			"margin": "0px 0px 0px 0px",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	}
};

const HEaser = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			margin="0px 32px 0px 32px"
			width="100%"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Text {...override("text2")} />
				<Link {...override("link")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Box {...override("box")} />
				{"    "}
			</StackItem>
		</Stack>
		<Stack {...override("stack1")}>
			{"        "}
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Box {...override("box1")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride2")} />
				{"        "}
				<Text {...override("text3")} />
				<Text {...override("text4")} />
				<Text {...override("text5")} />
				<Link {...override("link1")} />
				{"    "}
			</StackItem>
		</Stack>
		<Stack {...override("stack2")}>
			{"    "}
			<StackItem {...override("stackItem4")}>
				<Override {...override("stackItemOverride3")} />
				{"        "}
				<Text {...override("text6")} />
				<Text {...override("text7")} />
				<Text {...override("text8")} />
				<Link {...override("link2")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem5")}>
				{"        "}
				<Box {...override("box2")} />
				{"    "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(HEaser, { ...Section,
	defaultProps,
	overrides
});
export default HEaser;
---
title: "Light weight Postman alternative: Introducing Firecamp"
date: "2023-03-04"
description: "this is the desc"
published: false
type: Post
image: /images/blog/blog-1.jpg
authors:
  - nishchit
---

Hey, campers and API enthusiasts!

I'm incredibly excited to introduce you to Firecamp, the ultimate minimal and web-first API devtool. The journey of creating Firecamp began when I found myself working on various projects involving microservices and utilizing multiple protocols. It became apparent that there was a need for a complete API tool that could support the complete solution for all major protocols with extreme developer experience.


> tldr; <br/>
> Introducing Firecamp, The Open Source Postman Alternative <br/>
> GitHub: https://github.com/firecampdev/firecamp <br/>
> Platform: https://firecamp.dev <br/>
> Full OSS Launch: 15th Aug 2023

However, reaching this point was not without its challenges. Firecamp initially started as a WebSocket and SocketIO client, as I explored different possibilities and experimented with integrating services like Ably and Pusher. While these attempts didn't quite fit the vision I had in mind. However, those experiences and failures helped me shape Firecamp into what it is today.

Today, Firecamp stands proud as a versatile platform that supports REST, GraphQL, WebSocket, and SocketIO, offering dedicated playgrounds for each protocol. But we're not stopping there. Our journey is just beginning, and we have plans to incorporate support for even more protocols as we continue our open-source journey. (OSS journey started here, the full launch will happen on 15th Aug)

> **The end goal is to build the perfect and complete API DevTool.**

### 👉 Firecamp Offering
Here are all the amazing features that Firecamp has to offer:

1. Best-in-class Developer Experience `inspired by VSCode`
2. Truly Multi-protocol support:
   - Get dedicated API playgrounds for each protocol:
     - [**Rest**](https://firecamp.io/docs/rest/headers-and-params)
     - [**GraphQL**](https://firecamp.io/docs/graphql/introduction)
     - [**WebSocket**](https://firecamp.io/docs/websocket/introduction)
     - [**SocketIO**](https://firecamp.io/docs/socket-io/introduction)
     - [**Let me know what you're thinking about next**](https://github.com/FirecampDev/Firecamp/issues/new?assignees=&labels=&projects=&template=general_report.md&title=)
3. Organization management
4. Multiple workspaces 
5. [Unified API Collection](https://firecamp.io/docs/platform/collection)
6. [Web-first platform](https://firecamp.dev)
7. Desktop apps (coming soon) `for those who prefer a dedicated application.`
8. Multiple Firecamp Agents `including Browser, Desktop, Cloud, and Extension`
9. [Firecamp CLI](https://firecamp.io/docs/cli/getting-started) (work in progress)
10. Cookie management (work in progress)
11. API Documentation (work in progress)
12. API Test Runner (GUI and CLI)
13. Light and Dark `personalize your Firecamp experience`
14. Team Collaboration
15. [GraphQL Query Collection](https://firecamp.io/docs/graphql/collection)
16. [Environment Variables & Globals](https://firecamp.io/docs/platform/environment)
17. Postman compatibility `because I understand the pain of migration`
18. Import and Export of Collection 
19. API History (coming soon)
20. [Request scoped Scripts](https://firecamp.io/docs/rest/pre-request-script)
21. [Request scoped Auth](https://firecamp.io/docs/rest/authentication)
22. Collection/Folder scoped Scripts 
23. Collection/Folder scoped Auth
24. AI `I am more excited about it, status: planned`
25. **Phase-2** `let it be surprised for you`

These features are designed to enhance your API development experience, provide flexibility, and simplify the management of your APIs. Firecamp is continually evolving, and we're committed to bringing you even more exciting features in the future.

---

## What I am building currently
1. Firecamp CLI ([GitHub](https://github.com/FirecampDev/Firecamp/tree/feat/cli/packages/firecamp-cli))
2. Firecamp Collection Runner [GitHub](https://github.com/FirecampDev/Firecamp/tree/feat/cli/packages/firecamp-collection-runner)
3. Keyboard First Devtool

My top priorities are to create a command-line interface (CLI) and a collection runner. The CLI and collection runner will allow users to run a group of API requests together terminal or GUI interface. I'm also focused on making Firecamp **keyboard-friendly**, so developers can navigate and use it efficiently without relying solely on a mouse. These priorities aim to make Firecamp user-friendly and improve productivity for developers.


---
### 🎯 Core Focus?
It's **simplicity** without compromising the functionality. Simplicity is at the core of Firecamp's design philosophy, and it is the driving force behind the development of this API platform. The simplicity of the devtool is directly relate to the level of developer experience thus I am more obsessed about the DX in Firecamp.

#### why it's important?
Before pushing Firecamp to next level I have gone through deep research. Here are some gaps which are required to be bridged in API Platform.

1. **The complexity of API Tools:** Many existing API tools have become increasingly complex due to the rising demand for features. This complexity arises from the broken standards and the diverse nature of APIs. It is challenging for a single dev tool to cater to the expectations of all stateful, stateless, and hybrid APIs. (true with Postman and others)

2. **Minimal Platforms Falling Short:** While minimal and lightweight platforms exist, they often fail to fulfill the complex requirements of modern API team workflows. example web-first, cloud-first services like collaboration, monitoring, API portal, or up-to-mark documentation. (true with Insomnia and others)

3. **Application vs Devtool Mindset:** Most are started to resemble web or desktop applications rather than devtools. The architecture of the foundation plays a major role in this mindset which can lead to a suboptimal developer experience. (true with Postwoman)

4. **REST-first dilemma:** Many tools prioritize REST and provide limited support for other protocols. However, this compromises the ability to offer a complete end-to-end solution for specific protocols, their lifecycle, and the provision of dedicated playgrounds. (true with all)

> **Developers building REST APIs and those building GraphQL servers have different mindsets and expectations from an API platform. The same applies to all other protocols.**

By focusing on simplicity, Firecamp aims to bridge these gaps and provide a solution that is intuitive, powerful, and efficient. It ensures that developers can embrace a devtool specifically designed for API development, offering the necessary functionalities without overwhelming complexity. **_No more bloated experience_!!**

---

### API Devtool Inspiration?

Considering the **simplicity** as a value, the design aspect of the devtool is very crucial. Although I'm not a designer myself, I knew that creating a consistent and appealing design was essential. To tackle this challenge, I studied different devtools and open-source projects like VSCode, GitLab, and Figma Engineering. I also explored popular no-code solutions for building internal-tools like AppSmith, ToolJet, and Budibase. These projects helped me understand the key factors that make a successful devtool, such as design, architecture, and scalability.

As I narrowed down my focus to align with Firecamp's future, **VSCode** emerged as a significant source of inspiration. VSCode is widely recognized as the epitome of a well-designed devtool, boasting design standards, customization options, and an extensible architecture. The VSCode team dedicated considerable time and resources to achieve these high standards for a devtool.

Taking inspiration from VSCode, I incorporated design principles and adopted a similar approach to the architecture of Firecamp. This means that Firecamp not only looks good but also works efficiently and can be customized to suit different needs. By following the footsteps of a widely recognized and well-designed devtool like VSCode, I aim to provide Firecamp users with an enjoyable and visually appealing experience.

---

## Commitment Of Firecamp
At Firecamp, we are committed to delivering exceptional value and continuously improving our platform. Here are the key areas of our commitment:

**1. Developer Experience:** We are dedicated to enhancing the developer experience (DX) within Firecamp. Currently, we follow the high standards set by tools like VSCode. We will continue to listen to the community, gather feedback, and make improvements based on the needs and preferences of developers.

**2. Open Source:** Firecamp's core will always remain open source. We deeply value the open-source community and believe in the power of collaboration and contribution. We welcome and appreciate the involvement of the community in shaping Firecamp's future.

**3. Multi-protocol:** Firecamp is designed to be a truly multi-protocol platform. We provide dedicated playgrounds and end-to-end solutions for specific protocols, ensuring that developers have the tools they need for seamless API development. As we move forward, we will expand our support for additional protocols based on the interests and requirements of the community.

---

## Postman compatibility
As a developer, I understand the challenges of migrating from one tool to another. That's why I have made sure that Firecamp achieve the highest level of Postman compatibility. This compatibility ensures a smooth transition for users who are familiar with **API Collection**, **environment variables**, **global variables**, **collection variables**, and **scripts**. You can seamlessly transfer your existing knowledge and scripts to Firecamp. 


---
### Testimonials
---

## Roadmap: Future of Firecamp
Firecamp is evolving into a one-stop, feature-rich platform, aiming to become the most complete OpenSource Platform for API development. By starting the OpenSource journey, the future roadmap includes the introduction of

1. Cutting-edge **AI-powered capabilities**
2. A user-friendly CLI tool
3. An advanced API test runner
4. A versatile built-in proxy
5. Robust SSL support
6. Seamless history tracking
7. Improved developer experience
8. Enhanced API documentation, and
9. Seamless integration with CI/CD workflows
10. Undisclosed Platform **Phase-2**

These upcoming features will transform Firecamp into the ultimate destination for developers, offering a best-in-class development experience and a feature-rich API environment.

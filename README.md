# /dev/night homepage

This is the source of the new homepage.

## Requirements

### Yarn

You need a working installation of yarn.
Follow [this installation guide](https://yarnpkg.com/lang/en/docs/install).

## Development

To run it locally just run `yarn dev`

### Emojis

[Here](https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json) is a list of all emojis.

## Todo

- [x] Find a way to minify images so we don't waste bandwidth
- [ ] Find a way to highlight the current visited page in the nav bar
- [ ] Generate the navbar instead of inserting it manually
- [ ] Decide: Maybe use `mdx` for the blog and the normal sites could be normal `jsx`
- [x] Add favicon
- [ ] Add FontAwesome
- [ ] Load fonts locally
- [ ] Add connection to Firebase
- [ ] Display the next meetup event
- [ ] Add the live stream
- [ ] Add photo gallery
- [ ] Add past meetups and talk notes
- [ ] Add a wiki with commonly used words
- [ ] Make it awesome on the mobile phone
- [ ] Add a chat app for slack
- [ ] Add a page to view all suggestions for talks on github
- [ ] Add the ability to write blog entries

## Thanks

- [yarn](https://yarnpkg.com/en/) as a great package manager
- [Next.js](https://nextjs.org/) as a extensible framework
- [remark-emoji](https://github.com/rhysd/remark-emoji) to be able to use emojis
- [mdx](https://github.com/mdx-js/mdx) to use jsx inside Markdown
- [now](https://zeit.co/now) as an awesome hosting solution
- [Stylus](http://stylus-lang.com/) as a great addition to CSS
- [styled-jsx](https://github.com/zeit/styled-jsx) to be able to write inline CSS inside React components

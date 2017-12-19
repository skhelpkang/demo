const content = {
  title: 'Sample Page',
  text: 'This is a react sample page.',
};


//
function findSampleContent(pageName) {
  return {
    title: `${pageName} ${content.title}`,
    text: `${content.text} - ${pageName}`,
  }
}

export default {findSampleContent}

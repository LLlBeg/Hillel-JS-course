let res = wrapTags('Hello World', 'p');

  function wrapTags(text, tag, theyClose = true) {

    if (theyClose) {
        return `<${tag}>${text}</${tag}>`;
    } else {
        return `<${tag} ${text}/>`;
    }

  }

  
  console.log(res);
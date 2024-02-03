let blogList = [
  {
    blogName: "TechCrunch",
    uniqueNo: 1,
  },
  {
    blogName: "Wired",
    uniqueNo: 2,
  },
  {
    blogName: "Mashable",
    uniqueNo: 3,
  },
];

let blogsListContainerEl = document.getElementById("blogsListContainer");

function DelItem(id){
    let ele=$(id)
    ele.remove()
}

function createAndAppendItem(blog) {
  let blogId = "blog" + blog.uniqueNo;
  let buttonId = "button" + blog.uniqueNo;

  let blogEl = document.createElement("li");
  blogEl.id = blogId;
  blogEl.textContent = blog.blogName;
  blogsListContainerEl.appendChild(blogEl);

  let buttonEl = document.createElement("button");
  buttonEl.classList.add("btn", "btn-danger", "ml-3");
  buttonEl.textContent = "Delete";
  buttonEl.id = buttonId;

  // Write your code here

  buttonEl.onclick = function () {
    DelItem("#"+blogId);
  };

  blogEl.appendChild(buttonEl);
}

for (let blog of blogList) {
  createAndAppendItem(blog);
}

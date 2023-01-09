const List = class {
  constructor() {
    //  doms
    this.$form = $("#peopleForm");
    this.$input = $("#people");
    this.$list = $(".list");
    this.people = [];
    this.init();
  }
  //  methods
  init() {
    fetch("./getPeople")
      .then((res) => res.json())
      .then((data) => {
        this.people = data;
      })
      .catch((err) => console.log(err));

    $("#peopleForm").on("submit", (e) => {
      e.preventDefault();
      this.add(e);
    });
  }

  add(e) {
    const newPerson = $("#people").val();
    this.append(newPerson);
    $("#people").val("");
  }

  show() {
    this.people.forEach((person) => {
      $(".list").append(`<li>${person}</li>`);
    });
  }

  append(people) {
    this.people.push(people);
    this.save(this.people);
    this.show();
  }

  remove(people) {
    this.people = this.people.filter((person) => person !== people);
    this.save(this.people);
    this.show();
  }

  save(people) {
    const data = JSON.stringify(people);
    fetch("/savePeople", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
};

const list = new List();


import { stringify } from "querystring";
import { ContactNamePipe } from "./contact-name.pipe";
import { Contact } from "src/app/models/contact"

describe('Pipe: ContactName', () => {
  let sut: ContactNamePipe;

  let contact : Contact;


  beforeEach(() => {

    sut = new ContactNamePipe();

  });

  it('should concatenate a contact name', () => {

    expect(sut.transform({firstName: "q", surname: "w", email : ""})).toBe("q w");
  });
});



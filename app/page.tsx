export default function Home() {
  return (
    <div>
      <h1>Title</h1>
      <h2>SubTitle</h2>
      <p className="text-base">Paragraph</p>
      <a href="https://freecodecamp.com">Anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">Button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">Button</button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary">Disabled Button</button>
      </div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="date" />
      </div>
      <div>
        <input disabled type="text" placeholder="Email" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" >CheckBox</label>
      </div>
      <div>
        <select>
          <option>Option1</option>
          <option>Option2</option>
        </select>
      </div>
      <h1>Another Title</h1>
      <h2>Another SubTitle</h2>
    </div>
  )
}

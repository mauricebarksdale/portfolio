export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Maurice Barksdale
      </h1>
      <p className="mb-4">
        {`Hello! I'm a software engineer who studies Computer Science at the University of
        Maryland College Park! I'm passionate about full stack development and cybersecurity, where I have experience 
        in building applications with relevant technologies to solve ambigious problems. I also have particpated 
        in prestigious programs from top companies such as AmazonNext and IBM Accelerate. If you want to connect and work 
        together, please don't hesitate to reach out!`}
      </p>
      <div className="my-8">
        <img src="https://skillicons.dev/icons?i=java,python,c,html,css,javascript,typescript,powershell,bash" />
        <img src="https://skillicons.dev/icons?i=react,angular,express,flask,spring,maven,nodejs"></img>
        <img src="https://skillicons.dev/icons?i=aws,mongodb,firebase,mysql"></img>
        <img src="https://skillicons.dev/icons?i=git,vscode,docker,kubernetes,vite"></img>
      </div>
    </section>
  )
}

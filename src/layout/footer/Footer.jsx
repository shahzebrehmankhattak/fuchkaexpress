import React from 'react'
import Container from '../../ui/container/Container'

const Footer = () => {
  return (
    <footer className="border-t mt-14">
    <Container>
      <div className="py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h5 className="font-semibold text-green-700">Fuchka Xpress</h5>
          <p className="text-muted-foreground mt-2">Authentic Bengali street food on wheels.</p>
        </div>
        <div>
          <div className="font-semibold text-green-700">Service Area</div>
          <p className="text-muted-foreground mt-2">Nassau & Suffolk County, Long Island</p>
        </div>
        <div>
          <div className="font-semibold text-green-700">Contact</div>
           <a
                  href="tel:+16317108789"
                  className="text-sm text-muted-foreground"
                >
                  (631) 710-8789
                </a>
                <br/>
           <a
                  href="mailto:fuchkaxpress@gmail.com"
                  className="text-sm text-muted-foreground"
                >
                  fuchkaxpress@gmail.com
                </a>
        </div>
      </div>
      <div className="pb-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Fuchka Xpress. All rights reserved.</div>
    </Container>
  </footer>
  )
}

export default Footer
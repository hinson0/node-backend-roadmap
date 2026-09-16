// implements

interface Sender {
  send(message: string): void
}

class ConsoleSender implements Sender {
  send(message: string): void {
    console.log('heeh, ', message)
  }
}

const sender = new ConsoleSender()
sender.send('wahahah')

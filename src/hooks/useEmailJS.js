import React, { useState, useEffect, useRef } from 'react';
import emailjs, { init } from 'emailjs-com';
init('user_GcPNCeM7wTsytXQUmpneW');

const useEmailJS = (initialVal = false) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(initialVal);
  const [shouldSendMessage, setShouldSendMessage] = useState(!initialVal);
  const [sentMessage, setSentMessage] = useState(initialVal);
  const [messageInfo, setMessageInfo] = useState(undefined);

  const shouldSendRef = useRef(shouldSendMessage);
  shouldSendRef.current = shouldSendMessage;

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const sendSnackbarMessage = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setSentMessage(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
    setSentMessage(false);
    setSentMessage(false);
  };

  const sendEmail = () => {
    if (shouldSendRef.current) {
      emailjs
        .send('service_qdi432o', 'template_tj6p12g', {
          name,
          email,
          message,
        })
        .then(
          (result) => {
            console.log(result.text);
            sendSnackbarMessage('Your message was sent!');
            setShouldSendMessage(true);
            setSentMessage(false);
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log(error.text);
            sendSnackbarMessage('Error sending message.');
            setShouldSendMessage(true);
            setSentMessage(false);
          }
        );
    } else {
      setShouldSendMessage(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    sendSnackbarMessage('Sending...');
    setSentMessage(true);
    setTimeout(() => {
      sendEmail();
    }, 3000);
  };

  const unsendMessage = () => {
    setShouldSendMessage(false);
    setSentMessage(false);
    sendSnackbarMessage('Sending undone.');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return [
    messageInfo,
    open,
    handleClose,
    handleExited,
    sentMessage,
    unsendMessage,
    handleMessageChange,
    message,
    handleEmailChange,
    email,
    name,
    handleNameChange,
    submitForm,
  ];
};

export default useEmailJS;

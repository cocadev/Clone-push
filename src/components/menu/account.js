import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "./formatters";
import Blockie from "./blockie";
import { useState } from "react";
import Address from "./address";
import { getExplorer } from "./networks";
import Modal from 'react-modal';

const styles = {
  account: {
    height: "35px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "6px",
    backgroundColor: "#8365e2",
    cursor: "pointer",
    marginLeft: 30
  },
  text: {
    color: "#fff",
    fontWeight: '600',
    paddingTop: 15
  },
};
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#eee',
      width: 360,
      border: '4px solid #8365e2',
      borderRadius: 12
    },
  };
function Account() {

  const { authenticate, isAuthenticated, logout, account, chainId } = useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onConnect = () => {
    if (!window.ethereum) {
      alert("🦊 You must install Metamask, a virtual Ethereum wallet, in your browser.")
      return false;
    }
    authenticate({ signingMessage: "Hello World!" })
  }

  if (!isAuthenticated) {
    return (
      <div style={styles.account} onClick={onConnect}>
        <p style={styles.text}>Authenticate</p>
      </div>
    );
  }

  return (
    <>
      <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>{getEllipsisTxt(account, 6)}</p>
        <Blockie currentWallet scale={3} />
      </div>
      <Modal
        isOpen={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        style={customStyles}
      >
        <h3 className="text-center">Account</h3>
        <div
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address avatar="left" size={6} copyable style={{ fontSize: "20px" }} />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a href={`${getExplorer(chainId)}/address/${account}`} target="_blank" rel="noreferrer">
              View on Explorer
            </a>
          </div>
        </div>
        <br/>
        <button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
            background: 'red'
          }}
          className="btn-main" 
          onClick={() => {
            logout();
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </button>
      </Modal>
    </>
  );
}

export default Account;

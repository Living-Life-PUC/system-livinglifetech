import Input from "./Input";
import styles from "./Form.module.scss"

function Form() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
    
        const data = {
          fullName: formData.get("fullName") as string,
          username: formData.get("username") as string,
          password: formData.get("password") as string,
          email: formData.get("email") as string,
        };
    
        try {
          const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          console.log('response: ' + response);
          if (!response.ok) {
            throw new Error("Failed to register user");
          }
    
          alert("Usuário registrado com sucesso!");
        } catch (error) {
          console.error("Error:", error);
          alert("Erro ao registrar o usuário");
        }
      };

    return ( 
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input name="fullName" placeholder="Nome completo"/>
            <Input name="username" placeholder="Username"/>
            <Input name="password" placeholder="Password"/>
            <Input name="email" placeholder="E-mail"/>
            <button className={styles.button}>Cadastrar</button>
        </form>
     );
}

export default Form;
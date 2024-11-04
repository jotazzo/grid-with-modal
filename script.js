function mascara_telefone ()
        {
         var tel = document.getElementById("instelefone").value
            console.log(tel)
          tel=tel.slice(0,14)
            console.log(tel)
          document.getElementById("instelefone").value=tel
     tel=document.getElementById("instelefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("instelefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("instelefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("instelefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("instelefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }


function mascara_cep()
        { var cep_formatado = document.getElementById("inscep").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("inscep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("inscep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }

        }     

        function mascara_cpf()
        { var cpf_formatado = document.getElementById("inscpf").value
            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("inscpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }
        
            if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("inscpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("inscpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }

        } 

        function mascara_cnpj()
        { var cnpj_formatado = document.getElementById("inscnpj").value
            if (cnpj_formatado[2]!=".")
            {
                if (cnpj_formatado[2]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
                }
            }
        
            if (cnpj_formatado[6]!=".")
            {
                if(cnpj_formatado[6]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
                }
            }

            if (cnpj_formatado[10]!="/")
            {
                if(cnpj_formatado[10]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10]
                }
            }

            if (cnpj_formatado[11]!="0")
            {
                if(cnpj_formatado[11]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,11)+"0"+cnpj_formatado[11]
                }
                
            }
            if (cnpj_formatado[12]!="0")
            {
                if(cnpj_formatado[12]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,12)+"0"+cnpj_formatado[12]
                }
            }
            if (cnpj_formatado[13]!="0")
            {
                if(cnpj_formatado[13]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,13)+"0"+cnpj_formatado[13]
                }
            }
            if (cnpj_formatado[14]!="1")
            {
                if(cnpj_formatado[14]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,14)+"1"+cnpj_formatado[14]
                }
            }

            if (cnpj_formatado[15]!="-")
            {
                if(cnpj_formatado[15]!=undefined)
                {
                    document.getElementById("inscnpj").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15]
                }
            }

        } 

        function mascara_cod()
        { var cod_formatado = document.getElementById("inscod").value
            if (cod_formatado[2]!="_")
            {
                if (cod_formatado[2]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,2)+"_"+cod_formatado[2];
                }
            }

            if (cod_formatado[5]!="/")
            {
                if (cod_formatado[5]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,5)+"/"+cod_formatado[5];
                }
            }

            if (cod_formatado[6]!="/")
            {
                if (cod_formatado[6]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,6)+"/"+cod_formatado[6];
                }
            }

            if (cod_formatado[10]!="-")
            {
                if (cod_formatado[10]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,10)+"-"+cod_formatado[10];
                }
            }

            if (cod_formatado[14]!=".")
            {
                if (cod_formatado[14]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,14)+"."+cod_formatado[14];
                }
            }

            if (cod_formatado[15]!="9")
            {
                if (cod_formatado[15]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,15)+"9"+cod_formatado[15];
                }
            }

            if (cod_formatado[16]!=".")
            {
                if (cod_formatado[15]!=undefined)
                {
                    document.getElementById("inscod").value=cod_formatado.slice(0,16)+"."+cod_formatado[16];
                }
            }


        } 



    
let modal = document.getElementById('modal')
    
botao.addEventListener('click', ()=> {
    modal.classList.toggle('nao')
}
)
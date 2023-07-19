import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

  const redirectURL = new URL('/',request.url)// reqdireciona para a rota raiz


  return NextResponse.redirect(redirectURL,{
    headers:{
      'Set-Cookie': `token=; Path=/; max-age=0}`//Path permite escolher quais rotas podem acessar o cookie
    }, 
  })
}
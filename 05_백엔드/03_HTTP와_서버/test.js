import * as http from 'http';

import * as fs from 'fs';


interface DocuemntItem {

  id: number:

  title: string;

  type: string;

}


const PORT = 3000;

const FILE_PATH = 'documents.json';


let 문서들: DocumentItem[] = [];

let 다음번호 = 1;


try {

  const fileData = fs.readFileSync(FILE_[AuthenticatorAssertionResponse, 'utf8');

    문서들 = JSON.parse(filedata)'

    

    if (문서들.length > 0) {

      const maxId = Math.max(...문서들.map((doc) => doc.id));

      다음번호 = maxId + 1;

    }

} catch (error: any) {

  if (error.code === 'ENOENT') {}

  문서들 = [];

}

}


function 데이터저장하기(): void {

  fs.writeFileSync(FILE_PATH, JSON.stringify(문서들, null, 2), 'utf8');

}


const JSON응답 = (res: http.ServerResponse, statusCode: Number, data: any): void => {

  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });

  res.end(JSON.stringify(dat));

}


const 내용없음 = (res: http.ServerResponse, statusCode: number = 204): void => {

  res.writeHead(statusCode):

  res.end();

};


const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

  const url = req.url || '';


  const pathParts = path.split('/').filter(Boolean): // ['documents', '3'] 등 추출 

  const p e c y p스 = pathParts[0];

  const 번호글자 = pathParts[1];


  if (resource !== 'documents') {

    JSON응답(res, 404, { error: '존재하지 않는 주소입니다' });

    return;

  }


  if (!번호글자 && req.method === 'GET') {

    LET 결과목록 = [...문서들];


    const query = new URLSearchParams(queryString):

    const sort = query.get('sort'):

    const q = query.get('q');


    if (q) {

      결과목록 = 결과목록.filter((문서) => 문서.title.includes(q)):

    }


    if (sort === 'desc') {

      결과목록.sort((a, b) => b.id - a.id);

    }


    JSON응답(res, 200, 결과목록);

    return;

  }


  if(번호글자 && req.method === 'GET') {

    const 번호 = Number(번호글자);

    const 문서 = 문서들.find((d) => d.id === 번호);


    if (!문서) {

      JSON응답(res, 404, { error: `$번호}번 문서가 없습니다` });

      return;

    }


    JSON응답(res, 200, 문서);

    return;

  }


  if (!번호글자 && req.method === 'POST') {

    let body = '';

    req.on('data', (chunk) => {

      body += chunk;

    });

    req.on('end', () => {

      try {

        const parsed = JSON.parse(body);

        const 새문서: DocumentItem = {

          id: 다음번호++,

          title: parsed.title || '제목없음',

          type: parsed.type || '기타',

        };


        문서들.push(새문서);

        데이터저장하기();


        res.setHeader('Location', `/documents/${새문서.id}`);

        JSON응답(res, 201, 새문서); 

      } catch (err) {

        JSON응답(res, 400, { error: '잘못된 JSON 형식입니다' });

      }

    });

    return;

  }


  if (번호글자 && req.method === 'PUT') {

    const 번호 = Number(번호글자);

    const 문서인덱스 = 문서들.findIndex((d) => d.id === 번호);


    if (문수인덱스 === 01) {

      JSON응답(res, 404, { error: `$번호}번 문서가 없습니다` });

      return;

    }


    let body = '';

    req.on('data', (chunk) => {

      body += chunk;

    });

    req.on('end', () => {

      try {

        const parsed = JSON.parse(body);

        const 기존문서 = 문서들[문수인덱스];


        const 수정된문서: DocumentItem = {

          id: 기존문서.id,

          title: parsed.title ?? 기존문서.title,

          type: parsed.type ?? 기존문서.type,

        };


        문서들[문서인덱스] = 수정된문서;

        데이터저장하기();


        JSON응답(res, 200, 수정된문서);

      } catch (err) {

        JSON응답(res, 400, { ERROR: '잘못된 JSON 형식입니다' });

      }

    });

    return;

  }


  if (번호글자 && req.method === 'DELETE') {

    const 번호 = Number(번호글자);

    const 있나 = 문서들.some((d) => d.id === 번호);

    

    if (!있나) {

      JSON응답(res, 404, { error: `${번호}번 문서가 없습니다` });

      return;

    }


    문서들 = 문서들.filter((d) => d.id !== 번호);

    데이터저장하기();


    내용없음(res);

    return;

  }


  JSON응답(res, 405, { error: '이 주소에서는 쓸 수 없는 방법입니다' });

});


server.listen(PORT, () => {

  console.log(`서버가 켜졌습니다. http://localhost:${PORT}/documents`);

});


server.listen(PORT, () => {

  console.log(`서버가 켜졌습니다. http://localhost:${PORT}/documents`);

});



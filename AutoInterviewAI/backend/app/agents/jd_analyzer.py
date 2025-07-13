from PyPDF2 import PdfReader
from io import BytesIO
from app.services.pdf_parser import extract_jd_info

def extract_text_from_pdf(file_content: bytes) -> str:
    reader = PdfReader(BytesIO(file_content))
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    
    result = extract_jd_info(text)
    return result



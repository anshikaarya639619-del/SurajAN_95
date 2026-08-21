import os

def update_script_js():
    file_path = "script.js"
    
    if not os.path.exists(file_path):
        print("❌ Error: script.js file nahi mili!")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    print("🚀 SurajAN_95 Database Read Successfully!")
    # Yeh engine aage chal kar script.js ke andar naye products ki fauz automatic ghusayega!

if __name__ == "__main__":
    update_script_js()

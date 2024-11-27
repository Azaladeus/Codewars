use regex::Regex;

fn solution(s: &str) -> String {
    let spliter: Vec<&str> = s.split("").collect();
    let re = Regex::new(r"([A-Z])").unwrap();
    let mut new_str: Vec<String> = vec![];
    for i in 0..spliter.len() {
        if re.is_match(spliter[i]) {
            new_str.push(" ".to_string());
            new_str.push(spliter[i].to_string());
        } else {
            new_str.push(spliter[i].to_string());
        }
    }

    new_str.join("")
}

fn main() {
    println!("{}", solution("camelCasing"))
}